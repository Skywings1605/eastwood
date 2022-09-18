import {useState,useEffect} from 'react'
import axios from 'axios'
import "./Form.css"

export const Form = () => {

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
      <br></br>
      <h3 className='formh3'>BOOK A SITE VISIT NOW</h3>
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
        <input type='text' className='form-control' required
          placeholder='Enter your Mobile number' onChange={(e)=>setPhone(e.target.value)}
          value={phone}
        />
        <br></br>
        <label>Email</label>
        <input type='text' className='form-control' required
          placeholder='Enter your Email'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <br></br>
        <label>Message</label>
        <input type='text' className='form-control' required
          placeholder='Enter your message'
          onChange={(e)=>setMessage(e.target.value)}
          value={message}
        />
        <br></br>
		
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  );
}
