<p align="center">
<img src="https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/3312e99f-35f3-42e4-99f9-c1336472ce60" style="margin: 0 auto;" alt="Ga" width="200"/>
</p>

# CratePass (Blockchian Based Gate-Pass Dapp)

The CratePass dApp is a responsive, blockchain-based application deployed on the Stellar Blockchain, leveraging the security and transparency of decentralized technology. This application facilitates the efficient management of gate passes through a robust and tamper-proof system. The smart contract underpinning the CratePass dApp is written in Rust, utilizing SorobonSDK for seamless integration with the Stellar network. Users can register and manage their gate passes securely, while administrators have the authority to approve or deny these passes, ensuring a controlled and trustworthy access management solution. This innovative approach significantly enhances security, reduces administrative overhead, and provides real-time verification of gate pass statuses.

# How this dapp got its name?

#### Crypto + Gate Pass => CratePass

---

# Project Visuals

1. Interacting with our CratePassContract on Okashi.dev.
   ![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/621c17c4-28b7-432f-9e39-4933fa3e6e32)
2. Creating a new pass.
   ![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/8b865619-478d-4308-af07-31f1a9c607073.)
3. Checking the pass status when it's created v/s after it's expired.
<div style="display: flex;">
  <img src="https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/4b010c4f-a72f-44f2-87bc-109276810d0f" style="margin: 0 auto; display: flex;" alt="Ga" width="45%"/> 
  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
  <img src="https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/5f6d4f13-86ee-4506-8f0b-d4df615c5b71" style="margin: 0 auto; display: flex;" alt="Ga" width="45%"/></div>

## UI-Screenshots (Smart-contract Integeration is Underdevelopment. Complete Version will be releasing soon..)

- Regular User View:
  ![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/02d6e98b-6038-4c3c-a07f-1a364ec32f3d)

- Admin View:
  ![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/e0b5bac5-5d32-4b29-aafb-42e507750ed0)

---

## About Me

- I'm a final year undergrad, pursuing my Bachelor of Technology(B.Tech) degree from 'Computer Science & Engineering' branch at International Institute of Information Technology (IIIT), Naya Raipur, Chhattisgarh, India.
- A Web Developer, Web3.0/Blockchain-AI enthusiast who like doing graphic designing.
- Some of my Web3 project are [Citizen-Centric FIR system Prototype using blockchain](https://github.com/Bhupendrachouhan19/Citizen-centric-FIR-system-Prototype-using-blockchain) and [Tax-Invoice Automation](https://github.com/Bhupendrachouhan19/tax_invoice_automation).
- Skills:
  - Language/Frameworks: HTML, CSS, JavaScript, SQL, Solidity, React.JS, Next.JS, NodeJs, MongoDB, TailwindCSS
  - Tools: Git, GitHub, Adobe Photoshop, Figma, Canva
  - Platforms: Windows, Linux
  - IT Constructs : OOPs, Computer Networks, Cryptography

---

## Vision

The vision is to revolutionize access management through the CratePass dApp on the Stellar Blockchain. By leveraging blockchain technology, we aim to provide a secure, transparent, and efficient system for managing gate passes. This project will significantly reduce administrative overhead, prevent unauthorized access, and ensure real-time verification. By streamlining the approval process and enhancing security, we envision widespread adoption across industries, from corporate campuses to gated communities. The goal is to set a new standard for access control, promoting safety and efficiency for all stakeholders.

---

## Project Description

The CratePass dApp on the Stellar Blockchain facilitates secure and efficient management of gate passes. The application serves two user types:

- Regular Users: Can register for a gate pass, check its status, and expire their pass once used.
- Admin: Holds administrative privileges to approve or reject gate passes registered by Regular Users.

The deployment of the smart contract is managed by the Admin user, ensuring a single, authorized control point. Regular users neither have the ability to approve nor modify passes their own or other users pass, maintaining strict access control. This structure ensures that only authorized personnel can validate gate passes, enhancing security and reliability within the platform.

---

## Road Maps/Future Plans

- Implementing a more robust authentication system for the Admin.
- Right now, all the fields that make up a pass are divided into two parts based on which entity  (i.e., Regular User and Admin) controls which part of Pass data. Due to this, the regular user has to perform two different transactions to get all the data related to a pass.
- May be a more modern UI better.

---

## The Tech and Tools used:

- [Rust](https://doc.rust-lang.org/book/) Programming Language & Web3
- Crypto Wallet ([Freighter](https://www.freighter.app/))
- [Sorobon-SDK](https://developers.stellar.org/docs/tools/sdks/library) to develop the smart-contract
- Stellar Blockchain (Testnet)
- [Stellar Block Explorer](https://stellarscan.io/) for tracking transactions
- [Okashi.dev](https://okashi.dev/) (for writting and testing the smart contract)
- [React.JS](https://react.dev/learn) to build the frontend 

---

## Software Development Plan for CratePass dApp on Stellar Blockchain

1. **Smart Contract Functions and Variables**

   - Develop the smart contract to include key functions:
     - `create_pass(env: Env, title: String, descrip: String)`: Allows regular users to register a gate pass and returns a unique pass-id.
     - `view_my_pass(env: Env, unique_id: u64)`:Allow users to check the status details of their pass which is controlled by them.
     - `expire_pass (env: Env, unique_id: u64)`: Allows users to expire their gate pass using it's unique-pass-id.
     - `approve_pass (env: Env, ac_id: u64)`: Grants the admin the ability to approve a registered pass using its unique-pass-id. Here 'ac' stands for Admin-Control, because it's controlled by the admin.
     - `view_all_pass_status(env: Env)`: Allow the admin to view all the pending, approved, expired and total passes made in the dApp.
     - `view_ac_pass_by_unique_id(env: Env, unique_id: u64)`: Allow users to check the status details of their pass which is controlled by the Admin.

   - Define essential variables:
     - `struct Pass`: Stores user and their pass details like unique-pass-id, title, description, pass-created-time, in-time, and expiry status.
     - `struct ApprovalStatus`: Stores the count of all types of pass statuses like the number of pending, approved, expired, and total passes.
     - `struct Admincontrol`: stores the fields related to a pass, which are controlled or modified by the Admin. Those fields are ac_id(which basically represents the unique-pass-id of the 'Pass' struct), out-time, approval-status. 
     - `enum Passbook`: Maps 'Pass' to its respective unique-pass-id.
     - `Adminbook` : Maps 'Admincontrol' to its respective unique-pass-id 
     - `const All_PASS`: Used for referencing the ApprovalStatus struct.
     - `const COUNT_PASS`: Used for creating unique pass-IDs for newly created Passes.

2. **Access Control**

   - Only authorised Admin can call the approve_pass functions written insdie the smart-contract, in order to approve a pass.

3. **Logic behind various functions defined inside the Smart Contract**

   - Code the smart contract functions:
     - `create_pass`: Make sure that each new pass get's a unique-ID. It then stores the data controlled by the Regular User inside the instance of 'Pass' struct, after this it stores that Pass instance onto the blockchain. Finally after the execution it returns the unique-pass-ID.
     - `view_my_pass`: Allows regular users to fetch the data(controlled by them) of their pass status using its unique-pass-id.
     - `expire_pass`: Make sure that the pass regular user wants to expire is approved by the admin. If the conditions get satisfied then it simply returns updates the 'isexpired' status of the pass and also updates the view_all_pass_status, else it will simply return Panic!.
     - `approve_pass`: Before updating the approval status of a pass it makes sure that the pass is not already approved. If the conditions get satisfied then it simply updates the approval status, adds the out-time and updates the view_all_pass_status, else if the condition doesn't get statified then it will simply return Panic!.
     - `view_all_pass_status`: Allows admin to see the count of pending, approved, expired, and total passes registered on the platform.
     - `view_ac_pass_by_unique_id`:  Allow users to fetch the pass-details or data (controleld by the admin) using it's unique-pass-ID.

4. **Front-End Development**

   - React.JS has been used to make the front-end of this dApp, and TailwindCSS is used for styling the components

5. **Deployment**
   - Deployed the smart contract on the Stellar testnet.

---

## Deployed Smart Contract Address

`CBPSRM3TVRYA6PT7ESIXC64QZDTKIQNSKBYJ4CED64CN2OITETB67X2P`

---

## Set Up Environment / Project Installation Guide

### A) Environment Setup:

- Install Rust, using command:
  `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

- nstall the Soroban CLI using below mentioned command. For more info visit => [Soroban docs](https://developers.stellar.org/docs/smart-contracts)
  `cargo install --locked soroban-cli`

- Install [Node.js](https://nodejs.org/en)

- Get the [Freighter Wallet](https://www.freighter.app/) extension for you browser.
  Once enabled, then got to the network section and connect your wallet to the testnet.

- Install wasm32-unknown-unknown package using command:
  `rustup target add wasm32-unknown-unknown`

- To configure your CLI to interact with Testnet, run the following command:

```
soroban network add \
  --global testnet \
  --rpc-url https://soroban-testnet.stellar.org:443 \
  --network-passphrase "Test SDF Network ; September 2015"
```

- In order to deploy the smartcontract you will need an account. You can either use the an account from the `Freighter Wallet` or can configure an account named `alice` in the testnet using the command:
  `soroban keys generate --global alice --network testnet`

- You can see the public key of account `alice`:
  `soroban keys address alice`

---

### B) Backend (Smart-contract) Setup:

- Clone the repository:
  `git clone https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project.git`

- Smart-contract folder Structure:

```.
smart-contract
        ├── Cargo.lock
        ├── Cargo.toml
        ├── README.md
        └── contracts
            └── Gate-Pass-Dapp
                ├── Cargo.toml
                └── src
                    └── lib.rs
```

***=> Go inside the `/smart-contract` directory and do the below mentioned steps:***

- Build the contract:

```
soroban contract build
```

- Alternte command:

```
cargo build --target wasm32-unknown-unknown --release
```

- Install Optimizer:

```
cargo install --locked soroban-cli --features opt
```

- Build an Opmize the contract:

```
soroban contract optimize --wasm target/wasm32-unknown-unknown/release/Gate_Pass_Dapp.wasm
```

### Steps to the Deploy smart-contract on testnet:

- Get the hash of the Wasm bytes, like ```4bb69f6355400b2954f9537ec55cd24c4a0a3021eae95758a088b383587657cb``` using this command:

```
soroban contract install --source-account bhupendra --wasm target/wasm32-unknown-unknown/release/Gate_Pass_Dapp.wasm --rpc-url https://soroban-testnet.stellar.org:443 --network-passphrase "Test SDF Network ; September 2015"
```

- By using that Wasm hash, deploy the smartcontract on the testnet and get deployed address of the smartcontract using the following command:

```
soroban contract deploy \
  --wasm-hash 4bb69f6355400b2954f9537ec55cd24c4a0a3021eae95758a088b383587657cb \
  --source alice \
  --network testnet
```

**_Deployed address of this smartcontract:_** `CBPSRM3TVRYA6PT7ESIXC64QZDTKIQNSKBYJ4CED64CN2OITETB67X2P`

\*NOTE: If you get the XDR Error `error: xdr processing error: xdr value invalid`, then follow this [article](https://stellar.org/blog/developers/protocol-21-upgrade-guide).

### Invoke functions from the smart-contract:

- #### To invoke any of the function from the smartcontract you can use this command fromat.

```
soroban contract invoke \
  --id <DEPLOYED_CONTRACT_ADDRESS> \
  --source <YOUR_ACCOUNT_NAME> \
  --network testnet \
  -- \
  <FUNCTION_NAME> --<FUNCTION_PARAMETER> <ARGUMENT>
```

- #### For example:

1. To status of all registered passes, invoke `view_all_pass_status` function.

```
soroban contract invoke \
  --id CBPSRM3TVRYA6PT7ESIXC64QZDTKIQNSKBYJ4CED64CN2OITETB67X2P \
  --source alice \
  --network testnet \
  -- \
  view_all_pass_status
```

2. To create a new pass, invoke `create_pass` function:

```
soroban contract invoke \
  --id CBPSRM3TVRYA6PT7ESIXC64QZDTKIQNSKBYJ4CED64CN2OITETB67X2P \
  --source alice \
  --network testnet \
  -- \
  create_pass --record_id <YOUR_PUBLIC_ADDRESS> --title "Going Home" --descrip "I am going to my home today."
```

---

### C) Frontend Setup (React JS):
***=> Now come outside of the `/smart-contract` directory and do the below mentioned steps:***

- Install essential nodejs dependencies, using command:
```
npm install
```

- Make sure the "scripts" inside the package.json, looks like this:
```
  "scripts": {
    "start": "HTTPS=true react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

***=> Inside the Soroban.js file you will find a variable named ```contractAddress```, which contains the deployed smart-contract address. File path: ```./src/components/Soroban/Soroban.js```***

- Finally start the server, using command:
```
npm run start
```

## **🙂 If you like my work, please give this project a ⭐. It motivates me alot.**
