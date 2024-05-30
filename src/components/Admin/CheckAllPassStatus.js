import React, { useEffect } from "react";

const CheckAllPassStatus = () => {
  const allStatus = {
    approved: 0,
    expired: 0,
    pending: 0,
    total: 0,
  };

  // useEffect(() => {
  //     async function fetchAllPassStatus () {
  //         let status = [1, 1, 2, 4];
  //     }
  // }, [])

  return (
    <div className="md: mr-[50px] md:ml-[50px] bg-yellow-300 flex flex-col my-4 grow rounded-lg p-5">
      <div className="text-center">Check All Pass Status</div>
      <div className="text-center flex justify-center">
        <table>
          <thead className="border-b-2 border-dashed border-blue-700">
            <td>Key</td>
            <td>Value</td>
          </thead>
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
        </table>
      </div>
    </div>
  );
};

export default CheckAllPassStatus;
