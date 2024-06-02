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
  "CBPSRM3TVRYA6PT7ESIXC64QZDTKIQNSKBYJ4CED64CN2OITETB67X2P";

// coverting Account Address to ScVal form
const accountToScVal = (account) => new Address(account).toScVal();

// coverting String to ScVal form
const stringToScValString = (value) => {
  return nativeToScVal(value);
};

const numberToU64 = (value) => {
  return nativeToScVal(value, { type: "u64" });
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

// Working fine
async function createPass(caller, title, descrip) {
  let titleScVal = stringToScValString(title);
  let descripScVal = stringToScValString(descrip);
  let values = [titleScVal, descripScVal];

  try {
    const passId = await contractInt(caller, "create_pass", values);
    let resolvedPassId = Number(passId?._value?._value);
    console.log(resolvedPassId);
    // passId.then(res => resolvedPassId = res)
    // console.log(`!!Pass ID - ${resolvedPassId}, is Created!!`);
    return resolvedPassId;
  } catch (error) {
    console.log("Pass not created. Check if you already have a active pass");
  }
}


// Working fine 
async function approvePass(caller, pass_id) {
  // let accountScVal = accountToScVal(caller);
  let values = numberToU64(pass_id);

  try {
    await contractInt(caller, "approve_pass", values);
    console.log(`!!Pass ID - ${pass_id}, is now Arrpoved!!`);
  } catch (error) {
    console.log("Pass can't be approved!!");
  }
}

async function expirePass(caller, pass_id) {
  let values = numberToU64(pass_id);

  try {
    await contractInt(caller, "expire_pass", values);
    console.log(`!!Pass ID - ${pass_id}, is now expired!!`);
  } catch (error) {
    console.log("Pass can't be expired!!");
  }
}


// Working fine
async function  fetchAllPassStatus(caller) {
  try {
    let result = await contractInt(caller, "view_all_pass_status", null);

    // Approval Status:
    let approvedVal = Number(result?._value[0]?._attributes?.val?._value);

    // Expired Status:
    let expiredVal = Number(result?._value[1]?._attributes?.val?._value);

    // Pending Status:
    let pendingVal = Number(result?._value[2]?._attributes?.val?._value);

    // Total Status:
    let totalVal = Number(result?._value[3]?._attributes?.val?._value);

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

// Working fine
async function fetchMyPassStatus(caller, pass_id) {
  let values = numberToU64(pass_id);
  let result1;
  let result2;

  try {
    result1 = await contractInt(caller, "view_my_pass", values);
    // console.log("result-1 is has arived!", result1);
  } catch (error) {
    console.log("Unable to fetch Your Pass Status!!");
  }
  
  try {
    result2 = await contractInt(caller, "view_ac_pass_by_unique_id", values);
    // console.log("result-2 is has arived!", result2);
  } catch (error) {
    console.log("Unable to fetch Your Pass Status!!");
  }
  
  // Pass Created Time:
  let createdTimeVal = Number(result1?._value[0]?._attributes?.val?._value);
  console.log(createdTimeVal);

  // Pass Description:
  let descripVal = result1?._value[1]?._attributes?.val?._value?.toString();
  console.log(descripVal);

  // In Time:
  let inTimeVal = Number(result1?._value[2]?._attributes?.val?._value);
  console.log(inTimeVal);

  // Is Expired:
  let isExpiredVal = result1?._value[3]?._attributes?.val?._value;
  console.log(isExpiredVal);

  // Pass Title:
  let titleVal = result1?._value[4]?._attributes?.val?._value?.toString();
  console.log(titleVal);

  // Pass ID:
  let passIdVal = Number(result1?._value[5]?._attributes?.val?._value);
  console.log(passIdVal);

  // Approval status:
  let approvalStatusVal = result2?._value[1]?._attributes?.val?._value;
  console.log(approvalStatusVal);

  // Pass ID:
  let outTimeVal = Number(result2?._value[2]?._attributes?.val?._value);
  console.log(outTimeVal);


  let ansArr = [];
  ansArr.push(createdTimeVal);
  ansArr.push(descripVal);
  ansArr.push(inTimeVal);
  ansArr.push(isExpiredVal);
  ansArr.push(titleVal);
  ansArr.push(passIdVal);
  ansArr.push(approvalStatusVal);
  ansArr.push(outTimeVal);

  return ansArr;
}




export {
  createPass,
  approvePass,
  expirePass,
  fetchAllPassStatus,
  fetchMyPassStatus,
};
