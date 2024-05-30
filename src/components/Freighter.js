import {
  requestAccess,
  signTransaction,
  setAllowed,
} from "@stellar/freighter-api";

async function checkConnection() {
  const isAllowed = await setAllowed();
  if (isAllowed) {
    return isAllowed;
  }
}

const retrievePublicKey = async () => {
  let publicKey = "";
  let error = "";
  try {
    publicKey = await requestAccess();
  } catch (e) {
    error = e;
  }
  if (error) {
    return error;
  }
  return publicKey;
};

const userSignTransaction = async (xdr, network, signWith) => {
  let signedTransaction = "";
  let error = "";

  try {
    signedTransaction = await signTransaction(xdr, {
      network,
      accountToSign: signWith,
    });
  } catch (e) {
    error = e;
  }

  if (error) {
    return error;
  }

  return signedTransaction;
};

export { checkConnection, retrievePublicKey, userSignTransaction };
