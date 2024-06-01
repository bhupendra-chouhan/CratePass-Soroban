import React, { useContext, useState } from "react";
import { fetchAllPassStatus } from "components/Soroban/Soroban";
import { pubKeyData } from "App";

const CheckAllPassStatus = () => {
  const [allPassStatus, setAllPassStatus] = useState({});

  const pubKey = useContext(pubKeyData);

  const handleRefresh = async () => {
    await fetchAllPassStatus(pubKey).then((values) => {
      setAllPassStatus(values);
    });
  };

  // console.log(allPassStatus);

  const allStatus = {
    approved: allPassStatus[0] || 0,
    expired: allPassStatus[1] || 0,
    pending: allPassStatus[2] || 0,
    total: allPassStatus[3] || 0,
  };

  return (
    <div className="flex flex-col bg-yellow-300 rounded-lg my-4 items-center border p-4 min-w-max">
      <div className="bg-emerald-400 w-full p-2 rounded-md sm:text-2xl text-center flex gap-3 justify-between items-center font-bold">
        Check All Pass Status
        <button
          className="text-lg hover:bg-violet-500 bg-violet-400 rounded-md p-1 font-bold text-white"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
      <div className="text-center flex justify-center sm:text-2xl font-semibold ">
        <table>
          <thead className="border-b-2 border-dashed border-blue-700">
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Approved</td>
              <td>{allStatus.approved}</td>
            </tr>
            <tr>
              <td>Expired</td>
              <td>{allStatus.expired}</td>
            </tr>
            <tr>
              <td>Pending</td>
              <td>{allStatus.pending}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{allStatus.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckAllPassStatus;
