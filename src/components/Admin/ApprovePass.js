import React from "react";
import PendingPass from "./PendingPass";


const ApprovePass = () => {


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
      <div className="text-center w-full">ApprovePass</div>
      <div>
        <table className="flex flex-col gap-3">
          <thead className="border-b-2  border-blue-700">
            <tr className="text-center flex gap-4 justify-between border">
              <td className="text-center">Pending Passes</td>
              <td className="text-center">Approve</td>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-3 min-w-full h-52 overflow-scroll">
            {pendingPasses.map((pendingPass, index) => (
              <PendingPass
                key={index}
                pendingAddress={pendingPass}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovePass;
