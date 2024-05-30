import React, { useState } from "react";

const PendingPass = ({ pendingAddress }) => {
  const [approved, getApproved] = useState("Approve");

  const handleApprove = async () => {
    getApproved("Approved!");
  };

  return (
    <tr className="flex gap-4 justify-between border bg-green-400 rounded-lg items-center">
      <td className="p-2">{pendingAddress}</td>
      <td>
        <button
          className="p-2 rounded-md text-white bg-green-600 hover:bg-green-800"
          onClick={handleApprove}
        >
          {approved}
        </button>
      </td>
    </tr>
  );
};

export default PendingPass;
