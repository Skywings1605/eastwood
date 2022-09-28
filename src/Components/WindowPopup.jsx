import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" speed="4000" ref={ref} {...props} />;
});

export default function WindowPopup() {
  const [open, setOpen] = useState(false);
  const [dis, setDis] = useState("none");
  const [disp, setDisp] = useState("block");

  const [submit, setSubmit] = useState(false)
  const navigate = useNavigate()

  // form states
  const [name, setName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

    useEffect(()=>{
      setTimeout(()=>{
        setOpen(true)
      }, 2000)
    },[])

  // submit event
  const handleSubmit=(e)=>{
    console.log("clicked")
    e.preventDefault();
    console.log(name, phone, email);

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
    
    // setSubmit(true)
    // navigate("/thankyou")
    handleClose()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        PopUp
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="customized-dialog-title"
        sx={{top:"10PX"}}
      >
        <DialogTitle style={{display:"flex"}}>{"BOOK A FREE SITE VISIT NOW"} <span><Button onClick={handleClose} style={{right:"-20px",color:"red"}}>X</Button></span></DialogTitle>
        <DialogContent dividers>
        <form autoComplete="off" className='form-group' style={{top:0}}
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
		
        <div style={{display:"flex",justifyContent:'flex-end'}}>

          {/* {name != "" && phone != "" && email != "" ? 
          <button type='submit' style={{display: disp}} className='btn btn-primary '><a onClick={() => {setDis("block"); setDisp("none")}} href={require("./Files/estella_brochure.pdf")} download="Brochure.pdf" className="white">Download</a></button>:<button className='btn btn-primary white'>Download</button>} */}

          <button type='submit' className='btn btn-primary '>Submit</button>
         
        </div>
        
      </form>
          
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
