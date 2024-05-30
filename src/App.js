import './App.css';
import Header from './components/Header';
import Admin from './components/Admin/Admin';
import RegularUser from './components/RegularUser/RegularUser';

function App() {
  return (
    <div className="App">
      <Header />
      <RegularUser />
      <Admin />
    </div>
  );
}

export default App;
