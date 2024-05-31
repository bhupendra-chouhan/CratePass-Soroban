import React, { useContext } from "react";
import ExpirePass from "./ExpirePass";
import CheckMyPassStatus from "./CheckMyPassStatus";
import CreatePass from "./CreatePass";

const RegularUser = () => {
  return (
    <div className="bg-green-400 my-10 rounded-md p-4 flex flex-col items-center w-[90vw] m-auto">
      <div className="w-full text-center py-4 mb-5 rounded-lg bg-gray-300">Regular User</div>
      <div className="flex w-full grow justify-between">
        <div className="flex grow">
          <CreatePass />
        </div>

        <div className="flex flex-col grow items-center">
          <ExpirePass />
          <CheckMyPassStatus />
        </div>
      </div>
    </div>
  );
};

export default RegularUser;
