import { approvePass } from "components/Soroban/Soroban";
import { pubKeyData } from "App";
import React, { useState, useContext } from "react";

const PendingPass = ({ pendingPassId, pendingPassIndex }) => {
  const [approvalStatus, _setApprovalStatus] = useState(false);
  const pubKey = useContext(pubKeyData);
  
  const handleApprove = () => {
    if (pendingPassId !== undefined) {
      localStorage.setItem(pendingPassId, "true");
      approvePass(pubKey, pendingPassId);
      _setApprovalStatus(true);
    }
  };



  return (
      <tr className="flex gap-4 justify-between border border-black min-w-max p-1 bg-yellow-500 rounded-lg items-center">
        <td className="p-2 text-lg "> {pendingPassId} </td>
        <td>
          <button
            className={`p-2 rounded-md text-white hover:text-black hover:bg-green-300 ${
              approvalStatus ? "bg-green-600" : "bg-violet-200 text-black"
            }`}
            onClick={handleApprove}
          >
            {approvalStatus ? "Approved!" : "Approve"}
          </button>
        </td>
      </tr>
  );
};

export default PendingPass;
