import { pubKeyData, dynamicAddresslist } from "App";
import React, { useContext, useEffect, useState } from "react";
import { createPass } from "components/Soroban/Soroban";

const CreatePass = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const pubKey = useContext(pubKeyData);
  const {dynamicAddress, _setDynamicAddress} = useContext(dynamicAddresslist);

  const handleCreatePass = () => {
    createPass(pubKey, title , description);
    _setDynamicAddress((dynamicAddress)=>[...dynamicAddress, pubKey]);
    console.log("CreatePass: ",dynamicAddress);
  };


  // Storing list of newly created pass_ids/account addresss to local storage in string format:
  useEffect(() => {
    localStorage.setItem("pendingForApprovalList", JSON.stringify(dynamicAddress));
  }, [dynamicAddress]);


  return (
    <div className="md:mr-[50px] md:ml-[50px] bg-yellow-300 sm:w-[98%] rounded-lg p-5">
      <p className="bg-cyan-500 sm:text-2xl font-bold  p-2 rounded-md text-center flex justify-between gap-3 items-center font-bol">
        Create Pass:
      </p>
      <div className="w-[90%] m-auto flex flex-col gap-5 items-center justify-center">
        <div className="sm:w-[70%] py-2 flex flex-col gap-3">
          <div className="md:flex items-center justify-between">
            <p className="w-32 text-xl mx-2">Address: </p>
            <input
              type="text"
              className="md:w-full p-2 rounded-md bg-gray-200 text-gray-500"
              placeholder={pubKey}
              value={pubKey}
              readOnly
            />
          </div>
          <div className="md:flex items-center justify-between">
            <p className="w-32 text-xl mx-2">Title: </p>
            <input
              type="text"
              className="md:w-full  p-2 rounded-md"
              placeholder="Enter Title Here"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="md:flex items-center justify-between">
            <p className="w-32 text-xl mx-2">Description: </p>
            <input
              type="text"
              className="md:w-full p-2 rounded-md"
              placeholder="Enter Description Here"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="p-2 rounded-md text-white bg-green-600 hover:bg-green-800"
          onClick={handleCreatePass}
        >
          Create Pass
        </button>
      </div>
      <div className="text-center text-wrap max-w-full pt-4">
        <p className="text-red-500 text-xl">
          Note :- If your Wallet doesn't popup? You might have a pending pass.
        </p>
      </div>
    </div>
  );
};

export default CreatePass;