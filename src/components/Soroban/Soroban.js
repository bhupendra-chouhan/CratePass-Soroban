import {
  Contract,
  SorobanRpc,
  TransactionBuilder,
  Networks,
  BASE_FEE,
  nativeToScVal,
  Address,
} from "@stellar/stellar-sdk";
import { userSignTransaction } from "../Freighter";

let rpcUrl = "https://soroban-testnet.stellar.org";

let contractAddress =
  "CC27C52P3LWXBL3332ROVUPVW5ZY676WVQNCOI5MU45F473SPMFRT24F";

// coverting Account Address to ScVal form
const accountToScVal = (account) => new Address(account).toScVal();

// coverting String to ScVal form
const stringToScValString = (value) => {
  return nativeToScVal(value);
};

let params = {
  fee: BASE_FEE,
  networkPassphrase: Networks.TESTNET,
};

async function contractInt(caller, functName, values) {
  const provider = new SorobanRpc.Server(rpcUrl, { allowHttp: true });
  const sourceAccount = await provider.getAccount(caller);
  const contract = new Contract(contractAddress);
  let buildTx;

  if (values == null) {
    buildTx = new TransactionBuilder(sourceAccount, params)
      .addOperation(contract.call(functName))
      .setTimeout(30)
      .build();
  } else if (Array.isArray(values)) {
    buildTx = new TransactionBuilder(sourceAccount, params)
      .addOperation(contract.call(functName, ...values))
      .setTimeout(30)
      .build();
  } else {
    buildTx = new TransactionBuilder(sourceAccount, params)
      .addOperation(contract.call(functName, values))
      .setTimeout(30)
      .build();
  }

  let _buildTx = await provider.prepareTransaction(buildTx);

  let prepareTx = _buildTx.toXDR(); // pre-encoding (converting it to XDR format)

  let signedTx = await userSignTransaction(prepareTx, "TESTNET", caller);

  let tx = TransactionBuilder.fromXDR(signedTx, Networks.TESTNET);

  try {
    let sendTx = await provider.sendTransaction(tx).catch(function (err) {
      console.error("Catch-1", err);
      return err;
    });
    if (sendTx.errorResult) {
      throw new Error("Unable to submit transaction");
    }
    if (sendTx.status === "PENDING") {
      let txResponse = await provider.getTransaction(sendTx.hash);

      //   we will continously checking the transaction status until it gets successfull added to the blockchain ledger or it gets rejected
      while (txResponse.status === "NOT_FOUND") {
        txResponse = await provider.getTransaction(sendTx.hash);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      if (txResponse.status === "SUCCESS") {
        let result = txResponse.returnValue;
        return result;
      }
    }
  } catch (err) {
    console.log("Catch-2", err);
    return;
  }
}

// function to interact with it's respective smart contract functions:
async function createPass(caller, title, descrip) {
  let accountScVal = accountToScVal(caller);
  let titleScVal = stringToScValString(title);
  let descripScVal = stringToScValString(descrip);
  let values = [accountScVal, titleScVal, descripScVal];

  try {
    await contractInt(caller, "create_pass", values);
    
    console.log("!!Pass Created!!"); // Big Object
  } catch (error) {
    console.log("Pass not created. Check if you already have a active pass");
  }
}

async function approvePass(caller) {
  let accountScVal = accountToScVal(caller);
  let values = accountScVal;

  try {
    await contractInt(caller, "approve_pass", values);
    console.log("!!Pass Arrpoved!!");
  } catch (error) {
    console.log("Pass can't be approved!!");
  }
}

async function expirePass(caller) {
  let accountScVal = accountToScVal(caller);
  let values = accountScVal;

  try {
    await contractInt(caller, "expire_pass", values);
    console.log("!!Pass expired!!");
  } catch (error) {
    console.log("Pass can't be expired!!", error);
  }
}

async function fetchAllPassStatus(caller) {
  try {
    let result = await contractInt(caller, "view_all_pass_status", null);

    // Approval Status:
    let approvedVal = Number(result._value[0]._attributes.val._value);

    // Expired Status:
    let expiredVal = Number(result._value[1]._attributes.val._value);

    // Pending Status:
    let pendingVal = Number(result._value[2]._attributes.val._value);

    // Total Status:
    let totalVal = Number(result._value[3]._attributes.val._value);

    console.log(approvedVal, expiredVal, pendingVal, totalVal);
    let ansArr = [];
    ansArr.push(approvedVal);
    ansArr.push(expiredVal);
    ansArr.push(pendingVal);
    ansArr.push(totalVal);
    return ansArr;
  } catch (error) {
    console.log("Unable to fetch All Pass Status!!");
  }
}

async function fetchMyPassStatus(caller) {
  let result;
  let accountScVal;

  try {
    accountScVal = accountToScVal(caller);
    result = await contractInt(caller, "view_my_pass", accountScVal);
  } catch (error) {
    console.log("Unable to Your Pass Status!!");
  }

  // Approval Status:
  let approvalVal = result._value[0]._attributes.val._value;

  // Pass Description:
  let descripVal = result._value[1]._attributes.val._value.toString();

  // In-time:
  let in_timeVal = Number(result._value[2]._attributes.val._value);

  // Expiry Status:
  let isexpiredVal = result._value[3]._attributes.val._value;

  // Out-time:
  let out_timeVal = Number(result._value[4]._attributes.val._value);

  // Pass Title:
  let titleVal = result._value[5]._attributes.val._value.toString();

  console.log(
    approvalVal,
    descripVal,
    in_timeVal,
    isexpiredVal,
    out_timeVal,
    titleVal
  );

  let ansArr = [];
  ansArr.push(approvalVal);
  ansArr.push(descripVal);
  ansArr.push(in_timeVal);
  ansArr.push(isexpiredVal);
  ansArr.push(out_timeVal);
  ansArr.push(titleVal);
  return ansArr;
}

export {
  createPass,
  approvePass,
  expirePass,
  fetchAllPassStatus,
  fetchMyPassStatus,
};
