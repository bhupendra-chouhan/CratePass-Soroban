import './App.css';
import Header from './components/Header';
import Admin from './components/Admin/Admin';
import RegularUser from './components/RegularUser/RegularUser';
import { useState } from 'react';

function App() {
  const [pubkey, _setPubKey] = useState("");  
  console.log("App.js", pubkey);

  return (
    <div className="App">
      <Header setPubKey={_setPubKey} />
      <RegularUser />
      <Admin />
    </div>
  );
}

export default App;
