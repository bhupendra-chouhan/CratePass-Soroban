import { pubKeyData, passIdContext } from "App";
import React, { useContext, useEffect, useState } from "react";
import { createPass } from "components/Soroban/Soroban";

const CreatePass = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const pubKey = useContext(pubKeyData);
  const { passId, _setPassId } = useContext(passIdContext);

  const handleCreatePass = async () => {
    const tempPassId = await createPass(pubKey, title, description).then(
      (value) => value
    );
    console.log("templPassId: ", tempPassId);
    _setPassId(tempPassId);
    console.log("passId: ", passId);
  };

  // Storing list of newly created pass_ids/account addresss to local storage in string format:
  useEffect(() => {
    setLocalStorageKey(passId);
  }, [passId]);

  // setting every passId's approval status to 'false' and storing it inside the local storage.
  function setLocalStorageKey(key) {
    // Check if the key is a positive number and not undefined or null
    if (
      typeof key === "number" &&
      key > 0 &&
      key !== null &&
      key !== undefined
    ) {
      // Convert the key to a string to use it in local storage
      const keyString = key.toString();
      // Set the default value to false
      localStorage.setItem(keyString, JSON.stringify(false));
      console.log(`Key "${keyString}" added with default value false.`);
    } else {
      console.error("Invalid key. Please provide a positive number.");
    }
  }

  return (
    <div className="md:mr-[50px] md:ml-[50px] bg-yellow-300 sm:w-[98%] rounded-lg p-5">
      <p className="bg-cyan-500 sm:text-2xl font-bold  p-2 rounded-md text-center flex justify-between gap-3 items-center font-bol">
        Create Pass:
      </p>
      <div className="w-[90%] m-auto flex flex-col gap-5 items-center justify-center">
        <div className="sm:w-[70%] py-2 flex flex-col gap-3">
          <div className="md:flex items-center justify-between">
            <p className="w-48 text-xl mx-2">Your Address: </p>
            <input
              type="text"
              className="md:w-full p-2 rounded-md bg-gray-200 text-gray-500"
              placeholder={pubKey}
              value={pubKey}
              readOnly
            />
          </div>
          <div className="md:flex items-center justify-between">
            <p className="w-48 text-xl mx-2">Title: </p>
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
            <p className="w-48 text-xl mx-2">Description: </p>
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
