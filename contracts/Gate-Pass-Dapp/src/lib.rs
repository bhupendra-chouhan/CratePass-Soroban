#![no_std]
use soroban_sdk::{contract, contracttype, contractimpl, log, Env, Symbol, symbol_short};

#[contracttype] 
pub enum Passbook { 
    Pass(u64),
}

const COUNT_PASS: Symbol = symbol_short!("C_PASS");

#[contracttype]
#[derive(Clone)] 
pub struct Pass {
    pub name: Symbol, 
    pub record_id: u64,
    pub title: Symbol,
    pub descrip: Symbol,
    pub approval_status: bool,   
    pub out_time: u64,
    pub in_time: u64,
    pub expiry_status: bool,   
}  
 
#[contracttype]
#[derive(Clone)]
pub struct ApprovalStatus {
    pub approved: u64,
    pub pending: u64,
    pub total: u64
}

const ALL_PASS : Symbol = symbol_short!("ALL_PASS");

#[contract]
pub struct GatePassContract;

#[contractimpl]
impl GatePassContract {
    
    pub fn create_pass(env: Env, user: Symbol, title: Symbol, descrip: Symbol) {
        let mut count_pass: u64 = env.storage().instance().get(&COUNT_PASS).unwrap_or(0);
            count_pass += 1;
        
        let mut records = Self::view_my_pass(env.clone(), count_pass.clone());   

        let time = env.ledger().timestamp();

            let mut all_pass = Self::view_all_pass_status(env.clone()); 
                
            records.record_id = count_pass.clone();
        
            records.name = user.clone();
            records.title = title;
            records.descrip = descrip;
            records.approval_status = false;
            records.out_time = time;
            records.in_time = 0;
            records.expiry_status = false;

            // log!(&env, "approval_status :- {}", records.approval_status);

            if records.approval_status == false {
                all_pass.pending += 1;
                all_pass.total = all_pass.total + 1;
            } 
            
            // log!(&env, "approval_status :- {}", records.approval_status);
            env.storage().persistent().set(&Passbook::Pass(records.record_id.clone()), &records);
            // log!(&env, "approval_status :- {}", records.approval_status);

            env.storage().persistent().set(&ALL_PASS, &all_pass);
            
            env.storage().instance().set(&COUNT_PASS, &count_pass);
            log!(&env, "Pass Created. Wait for Approval!!");
    }
    

    pub fn approve_pass (env: Env, record_id: u64) {

        let mut records = Self::view_my_pass(env.clone(), record_id.clone());   
        
        if records.approval_status == false && records.out_time > 0 {
            records.approval_status = true;
            env.storage().persistent().set(&Passbook::Pass(records.record_id), &records);

            let mut all_pass = Self::view_all_pass_status(env.clone()); 
            all_pass.approved += 1;
            all_pass.pending -= 1;
            env.storage().persistent().set(&ALL_PASS, &all_pass);
            
            log!(&env, "Pass ID {} is now Approved", record_id);
        } else {
            panic!("Pass ID: {} is Already Approve!!", record_id);
        } 
    }


    pub fn expire_pass (env: Env, record_id: u64) {

        let mut records = Self::view_my_pass(env.clone(), record_id.clone());   
        
        if records.approval_status == true && records.in_time == 0 {
            records.expiry_status = true;
            env.storage().persistent().set(&Passbook::Pass(records.record_id), &records);
            
            log!(&env, "Pass ID {} is now Expired", record_id);
        } else {
            panic!("Either Pass ID: {} doesn't exits, or is not approved yet!!", record_id);
        } 
    }


    pub fn view_all_pass_status (env: Env) -> ApprovalStatus {
            env.storage().instance().get(&ALL_PASS).unwrap_or(ApprovalStatus {
            approved: 0,
            pending: 0,
            total: 0
        })
    }

    
    pub fn view_my_pass(env: Env, record_id: u64) -> Pass {
        // cloning for 'enums'
        let key = Passbook::Pass(record_id.clone()); 

        env.storage().instance().get(&key).unwrap_or(Pass {
            name: symbol_short!("Not_Found"),
            record_id: 0,
            title: symbol_short!("None"),
            descrip: symbol_short!("None"),
            approval_status: false,
            out_time: 0,
            in_time: 0,
            expiry_status: false,
        })
    }
}