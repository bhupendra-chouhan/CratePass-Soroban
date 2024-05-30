import React from "react";

const CheckMyPassStatus = () => {
  const status = {
    approval: false,
    descrip: "I'm going to my home today",
    in_time: 1716992786,
    isexpired: false,
    out_time: 1716992821,
    title: "Going Home",
  };

  return (
    <div className="flex flex-col bg-green-300 rounded-lg my-4 items-center border p-4 w-full">
      <div className="text-2xl text-center">Check Your Pass Status</div>
      <table className="w-full text-center">
        <thead className="border-b-2 border-blue-700">
          <td>Key</td>
          <td>Value</td>
        </thead>
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
          <td>{status.approval ? "Approved" : "Pending.."}</td>
        </tr>
        <tr>
          <td>Is Expired</td>
          <td>{status.isexpired ? "Expired" : "Active"}</td>
        </tr>
        <tr>
          <td>In Time</td>
          <td>{status.in_time}</td>
        </tr>
      </table>
    </div>
  );
};

export default CheckMyPassStatus;
