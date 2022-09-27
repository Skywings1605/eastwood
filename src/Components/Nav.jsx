import * as React from 'react';
import "./Nav.css"
import Box from '@mui/material/Box';
import logo from "./Images/eastlogo.svg"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import {useState,useEffect} from 'react'
import axios from 'axios';
import Popup from 'reactjs-popup';
import "./PopUp.css";
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Home from '@mui/icons-material/Home';
import Gallery from '@mui/icons-material/Photo';
import Event from '@mui/icons-material/EventNote';
import SvgIcon from '@mui/material/SvgIcon';
import styled from "styled-components"
import { PopupDiv } from './PopUp';
import CustomizedDialogs from "./Dialog.jsx";


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav style={{
      // display: "inline",
      width:"100%",
      overflow: "hidden",
      position: "fixed",
      zIndex:7,
      position:"fixed",
      padding:"10px",
      // paddingTop: "20px",
      // paddingBottom:"10px",
      backgroundColor: "#f7f4fb",
      // marginRight:"0px",
      justifyContent:"space-between",
      // marginTop:"10px"
    }}>
    {/* <React.Fragment> */}
      {/* <Box sx={{ display: 'flex', justifyContent:"space-between", alignItems: 'center', }}> */}
        <Typography sx={{ minWidth: 70, float:"left"}}><a><img className='slogo' src={logo} alt="" /></a></Typography>
        {/* <Typography sx={{ minWidth: 70 }}><a>Amenities</a></Typography>
        <Typography sx={{ minWidth: 70 }}><a>Contact</a></Typography>
        <Typography sx={{ minWidth: 70 }}><a></a>Download Brochure</Typography> */}
        <div id="navmenu">
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, float: "right" }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Typography sx={{ minWidth: 70, right: 0 }}><a className='menuicon'><img src={"https://cdn-icons-png.flaticon.com/512/1665/1665676.png"}className="stlogo" alt="" /></a></Typography>
          </IconButton>
        </Tooltip>
        <Typography sx={{ minWidth: 70 }}> <CustomizedDialogs/></Typography>
        </div>
        
      {/* </Box> */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 2,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
            <ListItemIcon>
                <Home fontSize="small" />
            </ListItemIcon> 
            <a href='#'>Home</a>
        </MenuItem>
        <MenuItem>
          <Avatar /> 
          <a href='#about'>About Us</a>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Event fontSize="small" />
          </ListItemIcon>
          <a href='#ameniti'>Amenities</a>
        </MenuItem>
        
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <a href='#contact'>Contact</a>
        </MenuItem>
        {/* <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
        </MenuItem>
          <CustomizedDialogs/> */}
      </Menu>
      
    {/* </React.Fragment> */}
    </nav>
  );
}