import React from "react";
import PendingPass from "./PendingPass";


const ApprovePass = () => {
  const handldeRefresh = () => {};

  const pendingPasses = [
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
    "GAODZC5VXXVWEBODQ3PXKK5AFZJXTMUNCVH6DE2F3SSDFSFSXDSGACMO62R66",
  ];

  return (
    <div className="mr-[50px] ml-[50px] bg-yellow-300 w-[60%] flex flex-col grow rounded-lg p-5">
      <div className="text-2xl flex gap-3 items-center justify-center w-full">
        ApprovePass Check Your Pass Status
        <button
          className="text-lg hover:bg-violet-500 bg-violet-400 rounded-md p-1 font-bold text-white"
          onClick={handldeRefresh}
        >
          Refresh
        </button>
      </div>
      <div>
        <table className="flex flex-col gap-3">
          <thead className="border-b-2 border-blue-700">
            <tr className="text-center flex gap-4 justify-between">
              <td className="text-center">Pending Passes</td>
              <td className="text-center">Approve</td>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-3 min-w-full h-52 overflow-scroll">
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
