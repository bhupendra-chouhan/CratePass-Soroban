import React, {useState} from "react";

const Header = () => {
    const [connect, getConnected] = useState("Connect");
    const [publickey, getPublicKey] = useState("Wallet not connected..");
    const [total, getTotal] = useState(0);
    
    const connectWallet = async () => {
        getConnected("Connected!");
        getPublicKey("0xABASFF");
    }

  return (
    <div className="bg-gray-300 h-20 flex justify-between items-center px-10">
      <div className="text-3xl">CratePass dApp</div>
      <div className="flex justify-between items-center gap-3">
        <div className="p-1 bg-gray-50 border-2 rounded-md">
          <span className="p-1 px-2 bg-violet-700 text-white h-full w-full rounded-md">Address</span> GAOD...2R66
        </div>
        <button
          className="text-xl w-52 hover:bg-blue-500 bg-blue-400 rounded-md p-4 font-bold text-white"
          onClick={connectWallet}
        >
          {connect}
        </button>
      </div>
    </div>
  );
};

export default Header;
