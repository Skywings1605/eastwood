import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fileDownload from 'js-file-download'
import brochure from "./Files/IFB_Eastwood_Brochure.pdf";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  // var fileDownload = require('js-file-download');

  const [dis, setDis] = useState("none");
  const [disp, setDisp] = useState("block");


  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  // form states
  const [name, setName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

  const [submit, setSubmit] = useState(false)

  useEffect(() => {
      if(submit) {
    navigate("/thankyou")
      }
  }, [])
// console.log("typeof email is", typeof(email) )
  // submit event
  const handleSubmit=(e)=>{
    // e.preventDefault();
    // console.log(name, phone, email);

    // our object to pass
    const data = {
      Name:name,
      Email:email,
      Phone:phone,
    }
    axios.post('https://sheet.best/api/sheets/55a4cb11-9b00-429d-a915-20f1d35f165f',data).then(response=>{
      console.log(response);
      setName('');
      setPhone('');
      setEmail('');
    })
    console.log("Submitted")
    // fileDownload(brochure, "SMR_Brochure.pdf")
    
    
    setSubmit(true)
    navigate("/thankyou")

  }





//   -------POP-UP-------

//   useEffect(()=>{
//       setTimeout(()=>{
//         setOpen(true)
//       }, 2000)

//   },[])


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Download Brochure
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <div className="outpop">

        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Please Fill the Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' className='form-control fmin' required
          placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Phone Number</label>
        <input type='number' className='form-control fmin' required
          placeholder='Enter your Mobile number' onChange={(e)=>setPhone(e.target.value)}
          value={phone}
        />
        <br></br>
        <label>Email</label>
        <input type='email' className='form-control fmin' required
          placeholder='Enter your Email'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <br></br>
		
        <div style={{display:"flex",justifyContent:'flex-end'}}>

          {name != "" && phone != "" && email != "" ? 
          <button type='submit' style={{display: disp}} className='btn btn-primary '><a onClick={() => {setDis("block"); setDisp("none")}} href={require("./Files/IFB_Eastwood_Brochure.pdf")} download="Brochure.pdf" className="white">Download</a></button>:<button className='btn btn-primary white'>Download</button>}

          <button type='submit' className='btn btn-primary ' style={{display: dis}}>Submit</button>
         
        </div>
        
      </form>
        </DialogContent>
        </div>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
