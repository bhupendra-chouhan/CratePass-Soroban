import React, {useState} from 'react'

const ExpirePass = () => {
    const [expire, setExpire] = useState("Expire Pass");
    
    const expirePass = async () => {
    setExpire("Succesfully Expired!");
    }
  return (
    <div>
      {" "}
      <button
        className="text-xl w-52 hover:bg-gray-500 bg-gray-400 rounded-md p-2 font-bold text-white"
        onClick={expirePass}
      >
        {expire}
      </button>
    </div>
  );
}

export default ExpirePass