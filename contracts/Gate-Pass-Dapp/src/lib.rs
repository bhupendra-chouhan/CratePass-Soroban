#![allow(non_snake_case)]
#![no_std]
use soroban_sdk::{contract, contracttype, contractimpl, log, Env, Symbol, String, symbol_short};


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


// Mapping unique_id of newly created pass to its respective Admincontrol struct
#[contracttype] 
pub enum Adminbook { 
    Admincontrol(u64)
}

// for creating pass-IDs for newly created Passes.

// Created a Admincontrol structure and defined fields like p_unique_Id to store the unique_id of newly created passes and approval_status to store the Approval Status of a newly created pass.
#[contracttype]
#[derive(Clone)] 
pub struct Admincontrol {
    pub ac_id: u64,
    pub out_time: u64,  // render
    pub approval: bool, // render 
}  


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
    pub unique_id: u64,
    pub title: String,
    pub descrip: String,
    pub crt_time: u64, 
    pub in_time: u64,
    pub isexpired: bool,   
}  


#[contract]
pub struct GatePassContract;

#[contractimpl]
impl GatePassContract {

    // This function creates and retuns a new pass:
    pub fn create_pass(env: Env, title: String, descrip: String) -> u64 {
        let mut count_pass: u64 = env.storage().instance().get(&COUNT_PASS).unwrap_or(0);
            count_pass += 1;
        
        // indirectly creating an instance of 'Record' struct.
        let mut records = Self::view_my_pass(env.clone(), count_pass.clone());   
        let ap_records = Self::view_ac_pass_by_unique_id(env.clone(), count_pass.clone());   // may not work with frontend, may be delete later.

        // making sure that not more than 1 pass is assigned to an record_id(or account):
        if records.isexpired == true && ap_records.approval == false {
            // log!(&env, "count pass: {}", count_pass);
    
            let time = env.ledger().timestamp();
    
            let mut all_pass = Self::view_all_pass_status(env.clone()); 
    
                // recording the pass data
                records.title = title;
                records.descrip = descrip;
                records.crt_time = time;
                records.isexpired = false;
            
                all_pass.pending += 1;
                all_pass.total = all_pass.total + 1;

                records.unique_id = all_pass.total.clone();
                
                // storing the newly created pass
                env.storage().instance().set(&Passbook::Pass(records.unique_id.clone()), &records);

                // env.storage().instance().set(&Unipassbook::Pass(records.unique_id.clone()), &records);

                // updating the all_pass data
                env.storage().instance().set(&ALL_PASS, &all_pass);
                // updating the count_pass
                env.storage().instance().set(&COUNT_PASS, &count_pass);
    
                env.storage().instance().extend_ttl(5000, 5000);

            log!(&env, "Pass Created with Pass-ID: {}", records.unique_id.clone());
            return records.unique_id.clone();
                
        } else {
            count_pass -= 1;
            env.storage().instance().set(&COUNT_PASS, &count_pass);
            log!(&env, "You can't create a pass! You already have a pending pass");
            panic!("You can't create a pass!");
        }
    }


        // This function enable the admin to approve and updates the status of a newly registered pass.
    pub fn approve_pass (env: Env, ac_id: u64) {

        let mut ap_records = Self::view_ac_pass_by_unique_id(env.clone(), ac_id.clone());     
        let records = Self::view_my_pass(env.clone(), ac_id.clone()); 
        
        // If Pass is created but is not approved, then we'll set the approval-status of the pass to true
        if ap_records.approval == false && ac_id.clone() <= records.unique_id.clone() {
            let time = env.ledger().timestamp();
            
            ap_records.ac_id = ac_id;
            ap_records.approval = true;
            ap_records.out_time = time;

            let mut all_status = Self::view_all_pass_status(env.clone()); 
            all_status.approved += 1; // increasing the approved pass count
            all_status.pending -= 1;  // decreasing the pending pass count
            
            // Updating the Pass data
            env.storage().instance().set(&ALL_PASS, &all_status);

            // Updating the Admincontrol data (Transaction happens by Admin)
            env.storage().instance().set(&Adminbook::Admincontrol(ac_id.clone()), &ap_records);
            
            env.storage().instance().extend_ttl(5000, 5000);

            log!(&env, "Pass-ID: {}, is now Approved", ac_id);
        } else {
            log!(&env, "Cannot Approved!!");
            panic!("Cannot Approved!!")
        } 
    }


        // This function gets triggered when the user wants to expire their pass:
    pub fn expire_pass (env: Env, unique_id: u64) {

        let ap_records = Self::view_ac_pass_by_unique_id(env.clone(), unique_id.clone()); 
        
        let mut records = Self::view_my_pass(env.clone(), unique_id.clone());   

        // Checking the Pass is whether approved or not:
        if ap_records.approval == true && records.isexpired == false {
            let time = env.ledger().timestamp();
            
            // If Pass is approved then we'll set the expiry-status of the pass to true and approval-status to false.
            records.isexpired = true;
            // records.approval = false;
            records.in_time = time;

            let mut all_pass = Self::view_all_pass_status(env.clone());
            // all_pass.approved -= 1; // decreasing the approved pass count
            all_pass.expired += 1; // increasing the expired pass count
            // Updating the Pass data
            env.storage().instance().set(&ALL_PASS, &all_pass);
            
            // Updating the Pass data
            env.storage().instance().set(&Passbook::Pass(unique_id.clone()), &records);
            
            env.storage().instance().extend_ttl(5000, 5000);
            
            log!(&env, "Pass-ID: {}, is now Expired!!", unique_id);
        } else {
            // If Pass is does not exits or approved then we'll just terminate the function from execution.
            log!(&env, "Either you haven't created your pass, or your pass is not approved yet, or your pass is already expired!!!!");
            panic!("Either you haven't created your pass, or your pass is not approved yet, or your pass is already expired!!");
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

    
    pub fn view_my_pass(env: Env, uniqueid: u64) -> Pass {
        
        let key = Passbook::Pass(uniqueid.clone()); 
        
        // getting data fron the blockchain for the 'key'
        env.storage().instance().get(&key).unwrap_or(Pass {
            // If data no found, then will return this Pass object with default values: 
            unique_id: 0,
            title: String::from_str(&env, "Not_Found"),
            descrip: String::from_str(&env, "Not_Found"),
            crt_time: 0,
            in_time: 0,
            isexpired: true, 
        })
    }


        // This function gets triggered when the user wants to get the status data of their pass:
    pub fn view_ac_pass_by_unique_id(env: Env, unique_id: u64) -> Admincontrol {
        
        let ac_key = Adminbook::Admincontrol(unique_id.clone()); 
        
        // getting data fron the blockchain for the 'key'
        env.storage().instance().get(&ac_key).unwrap_or(Admincontrol {
            // If data no found, then will return this Pass object with default values: 
            ac_id: 0,
            out_time: 0,
            approval: false,
        })
    }
}
