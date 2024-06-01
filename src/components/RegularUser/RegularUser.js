import React, { useContext } from "react";
import ExpirePass from "./ExpirePass";
import CheckMyPassStatus from "./CheckMyPassStatus";
import CreatePass from "./CreatePass";

const RegularUser = () => {
  return (
    <div className="bg-green-400 my-10 rounded-md p-4 flex flex-col items-center lg:w-[90vw] m-auto">
      <div className="font-semibold text-4xl w-full text-center py-4 mb-5 rounded-lg bg-gray-300">
        Regular User
      </div>
      <div className="flex md:flex md:flex-row flex-col w-full grow justify-between">
        <div className="flex grow">
          <CreatePass />
        </div>

        <div className="flex flex-col my-4 sm:my-0 grow items-center">
          <ExpirePass />
          <CheckMyPassStatus />
        </div>
      </div>
    </div>
  );
};

export default RegularUser;
