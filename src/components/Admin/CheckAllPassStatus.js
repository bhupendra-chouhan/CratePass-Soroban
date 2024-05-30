import React, { useEffect } from "react";

const CheckAllPassStatus = () => {
  const handldeRefresh = () => {};
  
  const allStatus = {
    approved: 2,
    expired: 1,
    pending: 4,
    total: 7,
  };

  // useEffect(() => {
  //     async function fetchAllPassStatus () {
  //         let status = [1, 1, 2, 4];
  //     }
  // }, [])

  return (
    <div className="md: mr-[50px] md:ml-[50px] bg-yellow-300 flex flex-col my-4 grow rounded-lg p-5">
      <div className="text-center">
        Check All Pass Status{" "}
        <button
          className="text-lg hover:bg-violet-500 bg-violet-400 rounded-md p-1 font-bold text-white"
          onClick={handldeRefresh}
        >
          Refresh
        </button>
      </div>
      <div className="text-center flex justify-center">
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
