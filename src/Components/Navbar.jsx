import "./Navbar.css"
import logo from "./Images/eastlogo.svg"
import { PopupDiv } from "./PopUp"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Form } from './Form';
import {useState,useEffect} from 'react'
import axios from 'axios'
import "./PopUp.css"
export const Navbar = () => {
     // form states
  const [name, setName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name, phone, email, message);

    // our object to pass
    const data = {
      Name:name,
      Email:email,
      Phone:phone,
      Message:message
    }
    axios.post('https://sheet.best/api/sheets/30feffdc-bec7-4f19-8059-cfb375161dc5',data).then(response=>{
      console.log(response);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    })
  }
    return (
        <div className="navbar">
            <div className="leftnav">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="rightnav">
                <a className="anav" href="#">Home</a>
                <a className="anav" href="#project">About Us</a>
                <a className="anav" href="#amenities">Amenities</a>
                <a className="anav" href="#contactus">Contact</a>
                {/* <a href=""><PopupDiv/></a> */}
                <Popup
          trigger={open => (
            <button className="butto po">Download Brochure</button>
          )}
          position="bottom center"
          closeOnDocumentClick
          closeOnEscape
          className='popdivmain'
        >
          <span className='popspan'> 
            <div className="popdiv">
      <br></br>
      <h3 className='fh3'>Please Fill the Details</h3>
      {/* <br></br> */}
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' className='form-control' required
          placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Phone Number</label>
        <input type='number' className='form-control' required
          placeholder='Enter your Mobile number' onChange={(e)=>setPhone(e.target.value)}
          value={phone}
        />
        <br></br>
        <label>Email</label>
        <input type='email' className='form-control' required
          placeholder='Enter your Email'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <br></br>
        <label>Message</label>
        <textarea type='text' className='form-control'
          placeholder='Enter your message'
          onChange={(e)=>setMessage(e.target.value)}
          value={message}
        ></textarea>
        <br></br>
		
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary popbtn'><a className="popa" href={require("./Images/IFB_Eastwood_Brochure.pdf")}>Submit</a></button>
        </div>
      </form>
    </div>
          </span>
        </Popup>
                {/* <a className="anav" href={require("./Images/IFB_Eastwood_Brochure.pdf")} download="IFB_Eastwood_Brochure">Download Brochure</a> */}
            </div>
            {/* <div class="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{display:"none",right:0,border: "none", animation: "none"}} id="rightMenu">
            <button onclick="closeRightMenu()" class="w3-bar-item w3-button w3-large">Close &times;</button>
            <a href="#" class="w3-bar-item w3-button">Link 1</a>
            <a href="#" class="w3-bar-item w3-button">Link 2</a>
            <a href="#" class="w3-bar-item w3-button">Link 3</a>
            </div>

            <div class="w3-teal">
            <button class="w3-button w3-teal w3-xlarge w3-right" onclick="openRightMenu()">&#9776;</button>
            </div> */}
        </div>
    )
}