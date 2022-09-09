import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Main } from './Components/Main';
import Nav from "./Components/Nav.jsx"
function App() {
  return (
    <div className="App">
      <Nav/>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
