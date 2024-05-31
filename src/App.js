import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin/Admin";
import RegularUser from "./components/RegularUser/RegularUser";
import { createContext, useState } from "react";
import { ADMIN_KEY } from "constants/contants";

const pubKeyData = createContext();
const dynamicAddresslist = createContext();

function App() {
  const [pubkey, _setPubKey] = useState("");
  const [dynamicAddress, _setDynamicAddress] = useState([]);

  return (
    <div className="App">
      <pubKeyData.Provider value={pubkey}>
        <Header setPubKey={_setPubKey} />

        <dynamicAddresslist.Provider value={{dynamicAddress, _setDynamicAddress}}>
          <RegularUser />
          {pubkey.toString() === ADMIN_KEY && <Admin />}
        </dynamicAddresslist.Provider>
      </pubKeyData.Provider>
    </div>
  );
}

export default App;
export { pubKeyData, dynamicAddresslist };
