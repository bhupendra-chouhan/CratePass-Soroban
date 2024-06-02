import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin/Admin";
import RegularUser from "./components/RegularUser/RegularUser";
import { createContext, useState } from "react";
import { ADMIN_KEY } from "./constants/constants";

const pubKeyData = createContext();
const passIdContext = createContext();

function App() {
  const [pubkey, _setPubKey] = useState("");
  const [passId, _setPassId] = useState();

  return (
    <div className="App">
      <pubKeyData.Provider value={pubkey}>
        <Header setPubKey={_setPubKey} />

          <passIdContext.Provider value={{passId, _setPassId}}>
            <RegularUser />
            {pubkey.toString() === ADMIN_KEY && <Admin />}
          </passIdContext.Provider>
      </pubKeyData.Provider>
    </div>
  );
}

export default App;
export { pubKeyData, passIdContext };
