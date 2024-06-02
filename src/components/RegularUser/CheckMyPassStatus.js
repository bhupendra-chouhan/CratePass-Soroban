import React, { useContext, useState } from "react";
import { fetchMyPassStatus } from "components/Soroban/Soroban";
import { passIdContext, pubKeyData } from "App";

const CheckMyPassStatus = () => {
  const [passStatus, setPassStatus] = useState({});

  const pubKey = useContext(pubKeyData);
  const {passId} = useContext(passIdContext);


  const handleRefresh = async () => {
    await fetchMyPassStatus(pubKey, passId).then(
      (values) => setPassStatus(values)
    );
  };

  const status = {
    uniqueID: passStatus[5] || 0,
    created_time: passStatus[0] || 0,
    title: passStatus[4] || "Not_Found",
    descrip: passStatus[1] || "Not_Found",
    out_time: passStatus[7] || 0,
    in_time: passStatus[2] || 0,
    approval: passStatus[6] || "Not_Found",
    isexpired: passStatus[3] || "Not_Found",
  };

  return (
    <div className="flex flex-col font-semibold bg-green-300 rounded-lg my-4 items-center border p-4 w-full">
      <div className="bg-emerald-400 w-full p-2 rounded-md sm:text-2xl font-bold text-center flex justify-between gap-3 items-center">
        Check Your Pass Status
        <button
          className="text-lg hover:bg-violet-500 bg-orange-700 rounded-md p-1 font-bold text-white"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
      <table className="w-full sm:text-2xl text-center">
        <thead className="border-b-2 border-blue-700">
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[50%]">Unique ID</td>
            <td className="w-[50%]">{status.uniqueID}</td>
          </tr>
          <tr>
            <td>Pass Created Time</td>
            <td>{status.created_time}</td>
          </tr>
          <tr>
            <td className="w-[50%]">Titile</td>
            <td className="w-[50%]">{status.title}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{status.descrip}</td>
          </tr>
          <tr>
            <td>Out Time</td>
            <td>{status.out_time}</td>
          </tr>
          <tr>
            <td>Is Approval</td>
            <td>{status.approval ? "Approved" : "Not Approved"}</td>
          </tr>
          <tr>
            <td>In Time</td>
            <td>{status.in_time}</td>
          </tr>
          <tr>
            <td>Is Expired</td>
            <td>{status.isexpired ? "Expired" : "Not Expired"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckMyPassStatus;
