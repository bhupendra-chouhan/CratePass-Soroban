<p align="center">
<img src="https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/3312e99f-35f3-42e4-99f9-c1336472ce60" style="margin: 0 auto;" alt="Ga" width="200"/>
</p>

# CratePass (Blockchian Based Gate-Pass Dapp)

The CratePass dApp is a blockchain-based application deployed on the Stellar Blockchain, leveraging the security and transparency of decentralized technology. This application facilitates the efficient management of gate passes through a robust and tamper-proof system. The smart contract underpinning the CratePass dApp is written in Rust, utilizing SorobonSDK for seamless integration with the Stellar network. Users can register and manage their gate passes securely, while administrators have the authority to approve or deny these passes, ensuring a controlled and trustworthy access management solution. This innovative approach significantly enhances security, reduces administrative overhead, and provides real-time verification of gate pass statuses.

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

- User Type-1 (Regular Users): Can register for a gate pass, check its status, and expire their pass once used.
- User Type-2 (Admin): Holds administrative privileges to approve or reject gate passes registered by Regular Users.

The deployment of the smart contract is managed by the Admin user, ensuring a single, authorized control point. Regular users neither have the ability to approve nor modify passes their own or other users pass, maintaining strict access control. This structure ensures that only authorized personnel can validate gate passes, enhancing security and reliability within the platform.

---

## Road Maps/Future Plans

- Building a user-friendly UI.
- Integerate Frontend with the smartcontract.
- Updating smart-contract with more new useful functions.

---

## The Tech and Tools used:

- [Rust](https://doc.rust-lang.org/book/) Programming Language & Web3
- Crypto Wallet([Freighter](https://www.freighter.app/)
- [Sorobon-SDK](https://developers.stellar.org/docs/tools/sdks/library)
- Stellar Testnet and Stellar Blockchain
- [Stellar Block Explorer](https://stellarscan.io/) for tracking transactions
- [Okashi.dev](https://okashi.dev/playground/azpvnpjplinkfgaksmsddriqrrps) (for writting and testing the smart contract)

---

## Software Development Plan for CratePass dApp on Stellar Blockchain

1. **Smart Contract Functions and Variables**

   - Develop the smart contract to include key functions:
     - `create_pass(env: Env, record_id: Address, title: String, descrip: String)`: Allows regular users to register a gate pass.
     - `view_my_pass(env: Env, record_id: Address)`: Enables users to check the status of their pass.
     - `expire_pass (env: Env, record_id: Address)`: Allows users to expire their gate pass.
     - `approve_pass (env: Env, record_id: Address)`: Grants the admin the ability to approve a registered pass.
     - `view_my_pass(env: Env, record_id: Address)`: Allow the admin to view all the pending, approved, and total passes made our the platform.
   - Define essential variables:
     - `struct Pass`: Stores user and their pass details like title, description, approval status, out-time, in-time, and expiry status.
     - `struct ApprovalStatus`: Stores the count of all types of pass statuses like the number of pending, approved, expired, and total passes.
     - `enum Passbook`: Maps passes to their respective owners' addresses.

2. **Access Control**

   - Only authorised users can invoke the functions written insdie the smart-contract.

3. **Logic behind various functions defined inside the Smart Contract**

   - Code the smart contract functions:
     - `create_pass`: Checks if the user is authorized or not. If the user is authorized, ensure the user has no more than one pass assigned to their address. If the user has zero passes assigned to their address, only then are they allowed to create a new pass.
     - `view_my_pass`: Allows authorized users to check their pass status using their address.
     - `expire_pass`: Allows authorized users to expire their pass using their address.
     - `approve_pass`: Checks if the user is an authorized admin or not. If the user is an authorized admin, only then can they approve the pass of other regular users.
     - `view_all_pass_status`: Allows users to see the count of pending, approved, expired, and total passes registered on the platform.

4. **Front-End Development**

   - Right now Front-end is under development and soon be ready to integerate with smartcontract

5. **Deployment**
   - Deployed the smart contract on the Stellar testnet.

---

## Deployed Smart Contract Address

`CC27C52P3LWXBL3332ROVUPVW5ZY676WVQNCOI5MU45F473SPMFRT24F`

**NOTE: Some functions can only be invoked by authorized users. If you were unable to invoke those functions from your command line, you can always interact with the smart contract using GUIs, by visiting [Okash.dev/CratePass](https://okashi.dev/playground/azpvnpjplinkfgaksmsddriqrrps).**

---

## Set Up Environment / Project Installation Guide

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

## Setup this Project:

- Clone the repository:
  `git clone https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project.git`

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

- Get the hash of the Wasm bytes, like "091808cb059d378432bd1e22ee458155d4850708290cb3568b5b98e8edca3bbb" using this command:

```
soroban contract install --source-account bhupendra --wasm target/wasm32-unknown-unknown/release/Gate_Pass_Dapp.wasm --rpc-url https://soroban-testnet.stellar.org:443 --network-passphrase "Test SDF Network ; September 2015"
```

- By using that Wasm hash, deploy the smartcontract on the testnet and get deployed address of the smartcontract using the following command:

```
soroban contract deploy \
  --wasm-hash 091808cb059d378432bd1e22ee458155d4850708290cb3568b5b98e8edca3bbb \
  --source alice \
  --network testnet
```

**_Deployed address of this smartcontract:_** `CC27C52P3LWXBL3332ROVUPVW5ZY676WVQNCOI5MU45F473SPMFRT24F`

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
  --id CC27C52P3LWXBL3332ROVUPVW5ZY676WVQNCOI5MU45F473SPMFRT24F \
  --source alice \
  --network testnet \
  -- \
  view_all_pass_status
```

2. To create a new pass, invoke `create_pass` function:

```
soroban contract invoke \
  --id CC27C52P3LWXBL3332ROVUPVW5ZY676WVQNCOI5MU45F473SPMFRT24F \
  --source alice \
  --network testnet \
  -- \
  create_pass --record_id <YOUR_PUBLIC_ADDRESS> --title "Going Home" --descrip "I am going to my home today."
```

**NOTE: Some functions can only be invoked by authorized users. If you were unable to invoke those functions from your command line, you can always interact with the smart contract by visiting [Okash.dev/CratePass](https://okashi.dev/playground/azpvnpjplinkfgaksmsddriqrrps).**

---

## **🙂 If you like my work, please give this project a ⭐.**
