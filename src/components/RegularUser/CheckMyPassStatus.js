import React, { useContext, useState } from "react";
import { fetchMyPassStatus } from "components/Soroban/Soroban";
import { pubKeyData } from "App";

const CheckMyPassStatus = () => {
  const [passStatus, setPassStatus] = useState({});

  const pubKey = useContext(pubKeyData);

  const handleRefresh = async () => {
    await fetchMyPassStatus(pubKey).then((values) => {
      setPassStatus(values);
    });
  };

  const status = {
    title: passStatus[5] || "Not_Found",
    descrip: passStatus[1] || "Not_Found",
    out_time: passStatus[4] || 0,
    in_time: passStatus[2] || 0,
    approval: passStatus[0] || "Not_Found",
    isexpired: passStatus[3] || "Not_Found",
  };

  return (
    <div className="flex flex-col bg-green-300 rounded-lg my-4 items-center border p-4 w-full">
      <div className="text-2xl text-center flex gap-3 items-center">
        Check Your Pass Status
        <button
          className="text-lg hover:bg-violet-500 bg-violet-400 rounded-md p-1 font-bold text-white"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
      <table className="w-full text-center">
        <thead className="border-b-2 border-blue-700">
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
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
            <td>{status.approval ? "Not Approved" : "Approved"}</td>
          </tr>
          <tr>
            <td>In Time</td>
            <td>{status.in_time}</td>
          </tr>
          <tr>
            <td>Is Expired</td>
            <td>{status.isexpired ? "Not Expired" : "Expired"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckMyPassStatus;
