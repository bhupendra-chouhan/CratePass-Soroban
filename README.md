# Blockchian Based Gate-Pass Dapp
---
The GatePass dApp is a blockchain-based application deployed on the Stellar Blockchain, leveraging the security and transparency of decentralized technology. This application facilitates the efficient management of gate passes through a robust and tamper-proof system. The smart contract underpinning the GatePass dApp is written in Rust, utilizing SorobonSDK for seamless integration with the Stellar network. Users can register and manage their gate passes securely, while administrators have the authority to approve or deny these passes, ensuring a controlled and trustworthy access management solution. This innovative approach significantly enhances security, reduces administrative overhead, and provides real-time verification of gate pass statuses.

# Project Visuals
---
![image](https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project/assets/78025043/8f69bc51-81a0-4090-a779-3c39257097cc)


## About Me
---

- I'm a final year, Computer Science and Engineering undergrad, pursuing my B.Tech. from IIIT Naya Raipur, Chhattisgarh, India. 
- Web3/Blockchain-AI Enthusiast
- I'm a self-starter eager to learn new technologies and I am comfortable with HTML, CSS, JavaScript, Python, SQL, C++, EVM, Solidity, RUST, React.JS, Next.JS, NodeJs, MongoDB, Bootstrap, Git, GitHub, AWS (EC2 Instance, S3 Bucket), Windows, Linux, OOPs, Computer Networks, Cryptography, Adobe Photoshop, Figma, Canva.

## Vision 
---
Our vision is to revolutionize access management through the GatePass dApp on the Stellar Blockchain. By leveraging blockchain technology, we aim to provide a secure, transparent, and efficient system for managing gate passes. This project will significantly reduce administrative overhead, prevent unauthorized access, and ensure real-time verification. By streamlining the approval process and enhancing security, we envision widespread adoption across industries, from corporate campuses to gated communities. Our goal is to set a new standard for access control, promoting safety and efficiency for all stakeholders.

## Project Description
---
The GatePass dApp on the Stellar Blockchain facilitates secure and efficient management of gate passes. The application serves two user types:

- User Type-1 (Regular Users): Can register for a gate pass, check its status, and expire their pass once used.
- User Type-2 (Admin): Holds administrative privileges to approve or reject gate passes registered by User Type-1.

The deployment of the smart contract is managed by a User Type-2, ensuring a single, authorized control point. Regular users do not have the ability to approve or modify passes beyond their own, maintaining strict access control. This structure ensures that only authorized personnel can validate gate passes, enhancing security and reliability within the platform.

## Road Maps/Future Plans
---
- Building a user-friendly UI.
- Integerate Frontend with the smartcontract.
- Implmentation a better authentication. 

## The Tech and Tools used:
---
- [Rust]("https://doc.rust-lang.org/book/") Programming Language & Web3
- Crypto Wallet([Freighter]("https://www.freighter.app/"))
- [Sorobon-SDK]("https://developers.stellar.org/docs/tools/sdks/library")
- Stellar Testnet and Stellar Blockchain
- [Stellar Block Explorer]("https://stellarscan.io/") for tracking transactions
- [Okashi.dev](https://okashi.dev) (for writting and testing the smart contract)

## Software Development Plan for GatePass dApp on Stellar Blockchain
---

1. **Define Smart Contract Functions and Variables**
   - Develop the smart contract to include key functions:
     - `create_pass(env: Env, user: Symbol, title: Symbol, descrip: Symbol)`: Allows User Type-1 to register a gate pass.
     - `view_my_pass(env: Env, record_id: u64)`: Enables users to check the status of their pass.
     - `expire_pass (env: Env, record_id: u64)`: Allows users to expire their gate pass.
     - `aapprove_pass (env: Env, record_id: u64)`: Grants the admin the ability to approve a registered pass.
     - `view_all_pass_status (env: Env)`: Allow the admin to view all the pending, approved, and total passes made our the platform. 
   - Define essential variables:
     - `struct Pass`: Stores user and their pass details like:
            name,record_id or pass_id,title,description,approval_status,out_time,in_time,expiry_status.
     - `Pass(u64)`: Maps user addresses to their gate passes.
     - `address admin`: Stores the address of the admin (User Type-2).

2. **Implement Access Control**
   - Ensure only User Type-2 (admin) can approve gate passes.

3. **Develop Smart Contract Logic**
   - Code the smart contract functions:
     - Ensure `registerGatePass` updates the mapping with new pass details.
     - Implement `checkPassStatus` to return the status of a user's pass.
     - Create `expirePass` to mark a pass as expired.
     - Code `approvePass` to change the pass status to approved if called by the admin.

4. **Front-End Development**
   - Right now Front-end is under development and soon be ready to integerate with smartcontract

5. **Testing and Validation**
   - Fixed the bug that was causing the create_pass() function to throw a Panic!, which was terminating the function's execution and therefore preventing new pass creation.

6. **Deployment**
   - Deploy the smart contract on the Stellar testnet.

## Smart Contract Address
---
xxxxxxxxxxxxxxxxxxx

## Set Up Environment / Project Installation Guide
---

- Install Rust, using command:
```curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh```

- nstall the Soroban CLI using below mentioned command. For more info visit => [Soroban docs]("https://developers.stellar.org/docs/smart-contracts)
```cargo install --locked soroban-cli```

- Install [Node.js]("https://nodejs.org/en)

- Get the [Freighter Wallet]("https://www.freighter.app/) extension for you browser. 
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

## Setup this Project:
---
- Clone the repository:
    ```git clone https://github.com/Bhupendrachouhan19/Soroban-Internship-Bootcamp-Final-Project.git```

- Folder Structure:
```.
├── Cargo.lock
├── Cargo.toml
├── README.md
└── contracts
    └── Gate-Pass-Dapp
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
```soroban contract optimize --wasm target/wasm32-unknown-unknown/release/hello_world.wasm```

- Deploy contact:
```
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/hello_world.wasm \
  --source alice \
  --network testnet
```

**Awesome now you can call functions from smartcontract and interact with the blockchain**
