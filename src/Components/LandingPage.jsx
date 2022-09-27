import '../App.css';
import { Navbar } from './Navbar';
import { Main } from './Main';
import Nav from "./Nav.jsx"
import { Form } from './Form';

export const LandingPage = () => {
    return(
        <div className="appmain">
      <div className='leftside'>
        <Nav/>
        <Navbar/>
        <Main/>
      </div>
      <div className='rightside'>
        <Form/>

      </div>
    </div>
    )
}