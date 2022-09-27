import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Form } from './Form';
import {useState,useEffect} from 'react'
import axios from 'axios'
import "./PopUp.css"
import { Link } from 'react-router-dom';
import CustomizedDialogs from "./Dialog.jsx";


export const PopupDiv = () => {
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
      Phone:phone
    }
    axios.post('https://sheet.best/api/sheets/30feffdc-bec7-4f19-8059-cfb375161dc5?_raw=1',data).then(response=>{
      console.log(response);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    })
  }
    return (
      <Popup

      trigger={open => (
        <button className="button pop"><CustomizedDialogs/></button>
      )}
    >
      
    </Popup>
    )
    
  };