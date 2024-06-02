import React, { useContext, useState } from "react";
import { expirePass } from "components/Soroban/Soroban";
import { passIdContext, pubKeyData } from "App";

const ExpirePass = () => {
  const pubKey = useContext(pubKeyData);
  const { passId } = useContext(passIdContext);

  const handleExpire = async () => {
    await expirePass(pubKey, passId);
  };
  return (
    <div>
      <button
        className="text-xl w-52 hover:bg-gray-700 bg-gray-500 rounded-md p-2 font-bold text-white"
        onClick={handleExpire}
      >
        Expire Your Pass
      </button>
    </div>
  );
};

export default ExpirePass;
