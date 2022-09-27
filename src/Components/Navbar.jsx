import "./Navbar.css"
import logo from "./Images/eastlogo.svg"
import { PopupDiv } from "./PopUp"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Form } from './Form';
import {useState,useEffect} from 'react'
import axios from 'axios'
import "./PopUp.css";
import CustomizedDialogs from "./Dialog.jsx";

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
                <CustomizedDialogs/>
                {/* <a href=""><PopupDiv/></a> */}
                {/*  */}
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