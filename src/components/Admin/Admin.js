import React from "react";
import ApprovePass from "./ApprovePass";
import CheckAllPassStatus from "./CheckAllPassStatus";

const Admin = () => {
  return (
    <div className="bg-blue-400 my-10 rounded-md p-4 flex flex-col items-center lg:w-[90vw] m-auto">
      <div className="w-full text-4xl font-semibold text-center text-white py-4 mb-5 rounded-lg bg-gray-700">
        Admin
      </div>

      <div className="flex gap-10 max-xl:flex-col justify-between w-full items-center">
        <CheckAllPassStatus />
        <ApprovePass />
      </div>
    </div>
  );
};

export default Admin;
