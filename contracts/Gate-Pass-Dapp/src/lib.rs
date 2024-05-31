#![allow(non_snake_case)]
#![no_std]
use soroban_sdk::{Address, contract, contracttype, contractimpl, log, Env, Symbol, String, symbol_short};


// Created a ApprovalStatus structure and defined all the important parameters that I want to track for a Pass.
#[contracttype]
#[derive(Clone)]
pub struct ApprovalStatus {
    pub approved: u64, // for storing the 'Count of Approved Passes' 
    pub pending: u64,  // for storing the 'Count of Passes pending for approval'
    pub expired: u64,     // for storing the 'Count of Expired passes on our platform or dApp'
    pub total: u64     // for storing the 'Count of Total pass made on our platform or dApp'
}


// for referencing the ApprovalStatus struct.
const ALL_PASS : Symbol = symbol_short!("ALL_PASS");


// Mapping Pass to, its Pass-Id
#[contracttype] 
pub enum Passbook { 
    Pass(Address)
}


// for creating pass-IDs for newly created Passes.
const COUNT_PASS: Symbol = symbol_short!("C_PASS"); 


// Created a Pass structure and defined all the important fields required for a new to be created.
#[contracttype]
#[derive(Clone)] 
pub struct Pass {
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
    pub fn create_pass(env: Env, record_id: Address, title: String, descrip: String) -> Address {
        
        // indirectly creating an instance of 'Record' struct.
        let mut records = Self::view_my_pass(env.clone(), record_id.clone());   

        // making sure that not more than 1 pass is assigned to an record_id(or account):
        if records.isexpired == true {
            let mut count_pass: u64 = env.storage().instance().get(&COUNT_PASS).unwrap_or(0);
                count_pass += 1;
            // log!(&env, "count pass: {}", count_pass);
    
            let time = env.ledger().timestamp();
    
            let mut all_pass = Self::view_all_pass_status(env.clone()); 
    
                // recording the pass data
                records.title = title;
                records.descrip = descrip;
                records.out_time = time;
                records.isexpired = false;
            
                all_pass.pending += 1;
                all_pass.total = all_pass.total + 1;
                
                // storing the newly created pass
                env.storage().instance().set(&Passbook::Pass(record_id.clone()), &records);
                // updating the all_pass data
                env.storage().instance().set(&ALL_PASS, &all_pass);
                // updating the count_pass
                env.storage().instance().set(&COUNT_PASS, &count_pass);
    
                env.storage().instance().extend_ttl(5000, 5000);
                
                return record_id.clone();
        } else {
            panic!("You can't create a pass!");
        }
    }
    

    // This function enable the admin to approve and updates the status of a newly registered pass.
    pub fn approve_pass (env: Env, record_id: Address) {
        
        let mut records = Self::view_my_pass(env.clone(), record_id.clone());   
        
        // If Pass is created but is not approved, then we'll set the approval-status of the pass to true
        if records.approval == false && records.out_time > 0 {
            records.approval = true;

            // Updating the Pass data
            env.storage().instance().set(&Passbook::Pass(record_id.clone()), &records);

            let mut all_pass = Self::view_all_pass_status(env.clone()); 
            all_pass.approved += 1; // increasing the approved pass count
            all_pass.pending -= 1;  // decreasing the pending pass count

            // Updating the Pass data
            env.storage().instance().set(&ALL_PASS, &all_pass);
            
            env.storage().instance().extend_ttl(5000, 5000);

            log!(&env, "Your pass is now Approved");
        } else {
            log!(&env, "Cannot Approved!!");
            panic!("Cannot Approved!!")
        } 
    }

    // This function gets triggered when the user wants to expire their pass:
    pub fn expire_pass (env: Env, record_id: Address) {
        
        let mut records = Self::view_my_pass(env.clone(), record_id.clone());   

        // Checking the Pass is whether approved or not:
        if records.approval == true && records.isexpired == false {
            let time = env.ledger().timestamp();
            
            // If Pass is approved then we'll set the expiry-status of the pass to true and approval-status to false.
            records.isexpired = true;
            records.approval = false;
            records.in_time = time;

            let mut all_pass = Self::view_all_pass_status(env.clone());
            all_pass.approved -= 1; // decreasing the approved pass count
            all_pass.expired += 1; // increasing the expired pass count
            // Updating the Pass data
            env.storage().instance().set(&ALL_PASS, &all_pass);
            
            // Updating the Pass data
            env.storage().instance().set(&Passbook::Pass(record_id.clone()), &records);
            
            env.storage().instance().extend_ttl(5000, 5000);
            
            log!(&env, "Your pass is now Expired");
        } else {
            // If Pass is does not exits or approved then we'll just terminate the function from execution.
            log!(&env, "Either you haven't created your pass, or you pass is not approved yet!!");
            panic!("Either you haven't created your pass, or you pass is not approved yet!!");
        } 
    }

    
    // This function gets triggered when the admin wants to get the status data of all registered pass:
    pub fn view_all_pass_status (env: Env) -> ApprovalStatus {    
        // getting data related to all the registered passes. 
        env.storage().instance().get(&ALL_PASS).unwrap_or(ApprovalStatus {
            // If data no found, then will return this ApprovalStatus object with default values: 
            approved: 0,
            pending: 0,
            expired: 0,
            total: 0
        })
    }
    
    // This function gets triggered when the user wants to get the status data of their pass:
    // pub fn view_my_pass(env: Env, record_id: u64) -> Pass {
    pub fn view_my_pass(env: Env, record_id: Address) -> Pass {
        // authenticating user.
        record_id.require_auth();
        
        let key = Passbook::Pass(record_id.clone()); 
        
        // getting data fron the blockchain for the 'key'
        env.storage().instance().get(&key).unwrap_or(Pass {
            // If data no found, then will return this Pass object with default values: 
            title: String::from_str(&env, "Not_Found"),
            descrip: String::from_str(&env, "Not_Found"),
            out_time: 0,
            in_time: 0,
            approval: false,
            isexpired: true, 
        })
    }
}
