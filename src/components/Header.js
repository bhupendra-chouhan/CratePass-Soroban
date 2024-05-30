import React, { useEffect, useState } from "react";
import { checkConnection, retrievePublicKey } from "./Freighter";
import { fetchAllPassStatus, fetchMyPassStatus } from "./Soroban/Soroban";

const Header = () => {
  const [connect, getConnected] = useState("Connect");
  const [publickey, getPublicKey] = useState("");
  const [total, getTotal] = useState(0);

  useEffect(() => {
    if (publickey !== "") {
      console.log("Entereed")
      getConnected("Connected!");
      // fetchAllPassStatus(publickey);
      fetchMyPassStatus(publickey);
    }
  }, [publickey])

  const connectWallet = async () => {
    if (await checkConnection()) {
      getConnected("Connected!");
      getPublicKey(await retrievePublicKey());
    }
  };

  return (
    <div className="bg-gray-300 h-20 flex justify-between items-center px-10">
      <div className="text-3xl">CratePass dApp</div>
      <div className="flex justify-between items-center gap-3">
        <div className="p-1 bg-gray-50 border-2 rounded-md">
          <span className="p-1 px-2 bg-violet-700 text-white h-full w-full rounded-md">
            Address
          </span>
          <span className="px-2">
            {`${publickey.substring(0, 4)} ${publickey && "..."} ${publickey.substring(publickey.length - 4)}`}
          </span>
        </div>
        <button
          className="text-xl w-52 hover:bg-blue-500 bg-blue-400 rounded-md p-4 font-bold text-white"
          onClick={connectWallet}
        >
          {connect}
        </button>
      </div>
    </div>
  );
};

export default Header;

/* Connect wallet function:

1. To enable connection between the wallet and the web application.
2. To get the public key of the connected wallet.
3. Signing the transaction.
*/
