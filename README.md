<p align="center">
<img src="https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/3312e99f-35f3-42e4-99f9-c1336472ce60" style="margin: 0 auto;" alt="Ga" width="200"/>
</p>

# CratePass (Blockchian Based Gate-Pass Dapp)

The CratePass dApp is a blockchain-based application deployed on the Stellar Blockchain, leveraging the security and transparency of decentralized technology. This application facilitates the efficient management of gate passes through a robust and tamper-proof system. The smart contract underpinning the CratePass dApp is written in Rust, utilizing SorobonSDK for seamless integration with the Stellar network. Users can register and manage their gate passes securely, while administrators have the authority to approve or deny these passes, ensuring a controlled and trustworthy access management solution. This innovative approach significantly enhances security, reduces administrative overhead, and provides real-time verification of gate pass statuses.

# How this dapp got its name?
#### Crypto + Gate Pass => CratePass

---
# Project Visuals (Life Cycle of a Pass)
![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/d0246ce8-5132-42ad-a5e9-f071118320f7)

1. Regular User: Creates a new pass.
![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/40abef76-6f9f-4966-be6a-7ec45bed2a9d)
![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/2f1b3954-b16f-4e82-8370-db6c7517e5a1)

3. Regular User: Checks the status of their newly created pass.
![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/280950be-900c-450a-b065-80838bca6c24)
![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/be36234c-d1fe-4bb5-9c6e-1c849a59adda)


5. Admin: Checks the count of pending, approved and total passes.

7. Admin: Approves the pass the of Regular User.
8. Admin: Again Checks updated count of pending, approved passes.
9. Regular User: Check the updated approval status of their pass.
10. Regular User: Expire their pass.
11. Regular User: Checks the updated expired-status of their pass. 

---
## About Me

- I'm a final year undergrad, pursuing my Bachelor of Technology(B.Tech) degree from 'Computer Science & Engineering' branch at IIIT Naya Raipur, Chhattisgarh, India. 
- A Web Developer, Web3.0/Blockchain-AI enthusiast who like doing graphic designing.
- Some of my Web3 project are [Citizen-Centric FIR system Prototype using blockchain](https://github.com/Bhupendrachouhan19/Citizen-centric-FIR-system-Prototype-using-blockchain) and [Tax-Invoice Automation](https://github.com/Bhupendrachouhan19/tax_invoice_automation).
- Skills:
  - Language/Frameworks: HTML, CSS, JavaScript, SQL, Solidity, React.JS, Next.JS, NodeJs, MongoDB, TailwindCSS
  - Tools: Git, GitHub, Adobe Photoshop, Figma, Canva
  - Platforms: Windows, Linux
  - IT Constructs : OOPs, Computer Networks, Cryptography

---
## Vision 
Our vision is to revolutionize access management through the CratePass dApp on the Stellar Blockchain. By leveraging blockchain technology, we aim to provide a secure, transparent, and efficient system for managing gate passes. This project will significantly reduce administrative overhead, prevent unauthorized access, and ensure real-time verification. By streamlining the approval process and enhancing security, we envision widespread adoption across industries, from corporate campuses to gated communities. Our goal is to set a new standard for access control, promoting safety and efficiency for all stakeholders.

---
## Project Description
The CratePass dApp on the Stellar Blockchain facilitates secure and efficient management of gate passes. The application serves two user types:

- User Type-1 (Regular Users): Can register for a gate pass, check its status, and expire their pass once used.
- User Type-2 (Admin): Holds administrative privileges to approve or reject gate passes registered by User Type-1.

The deployment of the smart contract is managed by a User Type-2, ensuring a single, authorized control point. Regular users do not have the ability to approve or modify passes beyond their own, maintaining strict access control. This structure ensures that only authorized personnel can validate gate passes, enhancing security and reliability within the platform.

---
## Road Maps/Future Plans
- Building a user-friendly UI.
- Integerate Frontend with the smartcontract.
- Implmentation a better authentication. 

---
## The Tech and Tools used:
- [Rust](https://doc.rust-lang.org/book/) Programming Language & Web3
- Crypto Wallet([Freighter](https://www.freighter.app/)
- [Sorobon-SDK](https://developers.stellar.org/docs/tools/sdks/library)
- Stellar Testnet and Stellar Blockchain
- [Stellar Block Explorer](https://stellarscan.io/) for tracking transactions
- [Okashi.dev](https://okashi.dev) (for writting and testing the smart contract)

---
## Software Development Plan for CratePass dApp on Stellar Blockchain

1. **Define Smart Contract Functions and Variables**
   - Develop the smart contract to include key functions:
     - `create_pass(env: Env, user: Symbol, title: Symbol, descrip: Symbol)`: Allows User Type-1 to register a gate pass.
     - `view_my_pass(env: Env, record_id: u64)`: Enables users to check the status of their pass.
     - `expire_pass (env: Env, record_id: u64)`: Allows users to expire their gate pass.
     - `approve_pass (env: Env, record_id: u64)`: Grants the admin the ability to approve a registered pass.
     - `view_all_pass_status (env: Env)`: Allow the admin to view all the pending, approved, and total passes made our the platform. 
   - Define essential variables:
     - `struct Pass`: Stores user and their pass details like:
            name,record_id or pass_id,title,description,approval_status,out_time,in_time,expiry_status.
     - `enum Passbook`: Maps pass_id to it's gate passes.
     - `address admin`: Stores the address of the admin (User Type-2).

2. **Implement Access Control**
   - Ensure only User Type-2 (admin) can approve gate passes.

3. **Develop Smart Contract Logic**
   - Code the smart contract functions:
     - Ensure `create_pass` updates the mapping with new pass details.
     - Implement `view_my_pass` to return the status of a user's pass.
     - Create `expire_pass` to mark a pass as expired.
     - Code `approve_pass` to change the pass status to approved if called by the admin.
     - Built `view_all_pass_status` to return the status of all registerd passes.

4. **Front-End Development**
   - Right now Front-end is under development and soon be ready to integerate with smartcontract

5. **Testing and Validation**
   - Fixed the bug that was causing the create_pass() function to throw a Panic!, which was terminating the function's execution and therefore preventing new pass creation.

6. **Deployment**
   - Deploy the smart contract on the Stellar testnet.

---
## Smart Contract Address
xxxxxxxxxxxxxxxxxxx

---
## Set Up Environment / Project Installation Guide

- Install Rust, using command:
```curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh```

- nstall the Soroban CLI using below mentioned command. For more info visit => [Soroban docs](https://developers.stellar.org/docs/smart-contracts)
```cargo install --locked soroban-cli```

- Install [Node.js](https://nodejs.org/en)

- Get the [Freighter Wallet](https://www.freighter.app/) extension for you browser. 
    Once enabled, then got to the network section and connect your wallet to the testnet. 

- Install wasm32-unknown-unknown package using command:
```rustup target add wasm32-unknown-unknown```

- To configure your CLI to interact with Testnet, run the following command:
```
soroban network add \
  --global testnet \
  --rpc-url https://soroban-testnet.stellar.org:443 \
  --network-passphrase "Test SDF Network ; September 2015"
  ```

- In order to deploy the smartcontract you will need an account. You can either use the an account from the ``Freighter Wallet`` or can configure an account named ```alice``` in the testnet using the command:
```soroban keys generate --global alice --network testnet```

- You can see the public key of account ```alice```:
```soroban keys address alice```

---
## Setup this Project:
- Clone the repository:
    ```git clone https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project.git```

- Folder Structure:
```.
├── Cargo.lock
├── Cargo.toml
├── README.md
└── contracts
    └── gate-pass-dapp
        ├── Cargo.toml
        └── src
            └── lib.rs
```

- Build the contract:
```soroban contract build```

- Alternte command:
```cargo build --target wasm32-unknown-unknown --release```

- Install Opmizer:
```cargo install --locked soroban-cli --features opt```

- Build an Opmiz:
```soroban contract optimize --wasm target/wasm32-unknown-unknown/release/gate_pass_dapp.wasm```

- Deploy contact:
```
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/gate_pass_dapp.wasm \
  --source alice \
  --network testnet
```

**Awesome now you can call functions from smartcontract and interact with the blockchain**
