#![no_std]
use soroban_sdk::{contract, contracttype, contractimpl, log, Env, Symbol, String, symbol_short};


// Created a ApprovalStatus structure and defined all the important parameters that I want to track for a Pass.
#[contracttype]
#[derive(Clone)]
pub struct ApprovalStatus {
    pub approved: u64, // for storing the 'Count of Approved Passes' 
    pub pending: u64,  // for storing the 'Count of Passes pending for approval'
    pub total: u64     // for storing the 'Count of Total pass made on our platform or dApp'
}


// for referencing the ApprovalStatus struct.
const ALL_PASS : Symbol = symbol_short!("ALL_PASS");


// Mapping Pass to, its Pass-Id
#[contracttype] 
pub enum Passbook { 
    Pass(u64)
}


// for creating pass-IDs for newly created Passes.
const COUNT_PASS: Symbol = symbol_short!("C_PASS"); 


// Created a Pass structure and defined all the important fields required for a new to be created.
#[contracttype]
#[derive(Clone)] 
pub struct Pass {
    pub name: String, 
    pub record_id: u64,
    pub title: String,
    pub descrip: String,
    pub out_time: u64, 
    pub in_time: u64,
    pub approval: bool,   
    pub isexpired: bool,   
}  


#[contract]
pub struct GatePassContract;

#[contractimpl]
impl GatePassContract {

    // This function creates and retuns a new pass:
    pub fn create_pass(env: Env, user: String, title: String, descrip: String) {
        let mut count_pass: u64 = env.storage().instance().get(&COUNT_PASS).unwrap_or(0);
            count_pass += 1;
        // log!(&env, "count pass: {}", count_pass);
        
        // indirectly creating an instance of 'Record' struct.
        let mut records = Self::view_my_pass(env.clone(), count_pass.clone());   

        let time = env.ledger().timestamp();

        let mut all_pass = Self::view_all_pass_status(env.clone()); 

            // recording the pass data
            records.record_id = count_pass.clone();
            records.name = user.clone();
            records.title = title;
            records.descrip = descrip;
            records.out_time = time;
        
            // if the pass is created but not approved, then we will increase the pending approval count 
            if records.approval == false {
                all_pass.pending += 1;
                all_pass.total = all_pass.total + 1;
            } 
            
            // storing the newly created pass
            env.storage().persistent().set(&Passbook::Pass(records.record_id.clone()), &records);
            // updating the all_pass data
            env.storage().persistent().set(&ALL_PASS, &all_pass);
            // updating the count_pass
            env.storage().instance().set(&COUNT_PASS, &count_pass);
            log!(&env, "Pass ID {} Created. Wait for Approval!!", records.record_id);
    }
    

    // This function enable the admin to approve and updates the status of a newly registered pass.
    pub fn approve_pass (env: Env, record_id: u64) {
        let mut records = Self::view_my_pass(env.clone(), record_id.clone());   
        
        // If Pass is created but is not approved, then we'll set the approval-status of the pass to true
        if records.approval == false && records.out_time > 0 {
            records.approval = true;

            // Updating the Pass data
            env.storage().persistent().set(&Passbook::Pass(records.record_id.clone()), &records);

            let mut all_pass = Self::view_all_pass_status(env.clone()); 
            all_pass.approved += 1; // increasing the approved pass count
            all_pass.pending -= 1;  // decreasing the approved pass count

            // Updating the Pass data
            env.storage().persistent().set(&ALL_PASS, &all_pass);
            
            log!(&env, "Pass ID {} is now Approved", record_id);
        } else {

            panic!("Pass ID: {} is Already Approve!!", record_id);
        } 
    }

    // This function gets triggered when the user wants to expire their pass:
    pub fn expire_pass (env: Env, record_id: u64) {
        let key = Passbook::Pass(record_id); 
        let mut records = Self::view_my_pass(env.clone(), record_id.clone());   

        // Checking the Pass is whether approved or not:
        if records.approval == true && records.in_time == 0 {
            let time = env.ledger().timestamp();
            
            // If Pass is approved then we'll set the expiry-status of the pass to true
            records.isexpired = true;
            records.in_time = time;
            // Updating the Pass data
            env.storage().persistent().set(&Passbook::Pass(records.record_id), &records);
            
            log!(&env, "Pass ID {} is now Expired", record_id);
        } else {
            // If Pass is does not exits or approved then we'll just terminate the function from execution.
            panic!("Either Pass ID: {} doesn't exits, or is not approved yet!!", record_id);
        } 
    }

    
    // This function gets triggered when the admin wants to get the status data of all registered pass:
    pub fn view_all_pass_status (env: Env) -> ApprovalStatus {
            // getting data related to all the registered passes. 
            env.storage().instance().get(&ALL_PASS).unwrap_or(ApprovalStatus {
            // If data no found, then will return this ApprovalStatus object with default values: 
            approved: 0,
            pending: 0,
            total: 0
        })
    }
    
    // This function gets triggered when the user wants to get the status data of their pass:
    pub fn view_my_pass(env: Env, record_id: u64) -> Pass {
        let key = Passbook::Pass(record_id.clone()); 
        
        // getting data fron the blockchain for the 'key'
        env.storage().instance().get(&key).unwrap_or(Pass {
            // If data no found, then will return this Pass object with default values: 
            name: String::from_str(&env, "Not_Found"),
            record_id: 0,
            title: String::from_str(&env, "Not_Found"),
            descrip: String::from_str(&env, "Not_Found"),
            out_time: 0,
            in_time: 0,
            approval: false,
            isexpired: false, 
        })
    }
}
