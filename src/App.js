import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin/Admin";
import RegularUser from "./components/RegularUser/RegularUser";
import { createContext, useState } from "react";

const pubKeyData = createContext(); 

function App() {
  const [pubkey, _setPubKey] = useState("");

  return (
    <div className="App">
      <pubKeyData.Provider value={pubkey}>
        <Header setPubKey={_setPubKey} />
        <RegularUser />
        <Admin />
      </pubKeyData.Provider>
    </div>
  );
}

export default App;
export {pubKeyData};
