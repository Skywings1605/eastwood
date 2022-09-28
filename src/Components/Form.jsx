import {useState,useEffect} from 'react'
import axios from 'axios'
import "./Form.css"
import { ThankYou } from './ThankYou'
import { Link, useNavigate } from 'react-router-dom'

export const Form = () => {
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate()


  // form states
  const [name, setName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=(e)=>{
    // e.preventDefault();
    console.log(name, phone, email, message);

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
    setSubmit(true)
    navigate("/thankyou")
    
  }

  // // getting data function
  // const getData=()=>{
  //   axios.get('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff').then((response)=>{
  //     setData(response.data);
  //   })
  // }

  // // triggering function
  // useEffect(()=>{
  //   getData();
  // },[data])

  return (
    <div className="formdi">
      {submit ? <ThankYou/> :
      <>
      <h3 className='formh3'>BOOK A FREE SITE VISIT NOW</h3>
      {/* <br></br> */}
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' id='in1' className='form-control fin' required
          placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Phone Number</label>
        <input type='tel' pattern='[6-9]{1}[0-9]{9}' id='in2' className='form-control fin' required
          placeholder='Enter your Mobile number' onChange={(e)=>setPhone(e.target.value)}
          value={phone}
        />
        <br></br>
        <label>Email</label>
        <input type='email' id='in3' className='form-control fin' required
          placeholder='Enter your Email'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <br></br>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>{name != "" && phone != "" && email != "" ? "Submit":"Submit"}</button>
        </div>
      </form></>
      }
    </div>
  );
}
