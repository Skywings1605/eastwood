import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Main } from './Components/Main';
import Nav from "./Components/Nav.jsx"
import { Form } from './Components/Form';
function App() {
  return (
    <div className="App">
      <div className='leftside'>
        <Nav/>
        <Navbar/>
        <Main/>
      </div>
      <div className='rightside'>
        <Form/>

      </div>
    </div>
  );
}

export default App;
