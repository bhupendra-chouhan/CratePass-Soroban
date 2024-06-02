import React, {useState} from "react";
import PendingPass from "./PendingPass";

const ApprovePass = () => {
  const [allPassesListLength, _setAllPassesListLength] = useState(localStorage.length);

  const handleRefresh = () => {
    _setAllPassesListLength(localStorage.length);
  };

  return (
    <div className="flex flex-col bg-yellow-300 rounded-lg my-4 items-center border p-4 w-full">
      <div className="bg-cyan-500 w-full p-2 rounded-md sm:text-2xl font-bold text-center flex justify-between gap-3 items-center font-bol">
        <span>Update status of registered Pass</span>
        <button
          className="text-lg hover:bg-violet-500 bg-orange-700 rounded-md p-1 border-black font-bold text-white"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
      <div className="w-full">
        <table className="flex flex-col gap-3">
          <thead className="border-b-2 border-blue-700">
            <tr className="text-center flex gap-4 justify-between">
              <th className="text-center">Pending Pass IDs</th>
              <th className="text-center">Approve</th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-3 h-80 overflow-scroll">
            {Array.from({ length: allPassesListLength }, (_, i) => (
              <PendingPass key={i} pendingPassId={i + 1} pendingPassIndex={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovePass;
