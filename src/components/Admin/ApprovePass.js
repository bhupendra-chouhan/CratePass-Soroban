import { dynamicAddresslist } from "App";
import React, {useContext} from "react";
import PendingPass from "./PendingPass";

const ApprovePass = () => {
  const { dynamicAddress, _setDynamicAddress } = useContext(dynamicAddresslist);
  console.log("ApprovePass.js: ", dynamicAddress);

  const handleRefresh = () => {

  };

  const pendingPasses = [
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
  ];

  return (
    <div className="flex flex-col bg-yellow-300 rounded-lg my-4 items-center border p-4 w-full">
      <div className="bg-cyan-500 w-full p-2 rounded-md sm:text-2xl font-bold text-center flex justify-between gap-3 items-center font-bol">
        <span>ApprovePass Check Your Pass Status</span>
        <button
          className="text-lg hover:bg-violet-500 bg-violet-400 rounded-md p-1 font-bold text-white"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
      <div className="w-full">
        <table className="flex flex-col gap-3">
          <thead className="border-b-2 border-blue-700">
            <tr className="text-center flex gap-4 justify-between">
              <th className="text-center">Pending Passes</th>
              <th className="text-center">Approve</th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-3 h-80 overflow-scroll">
            {pendingPasses.map((pendingPass, index) => (
              <PendingPass key={index} pendingAddress={pendingPass} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovePass;
