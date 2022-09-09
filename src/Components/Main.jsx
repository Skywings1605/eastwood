import Slides from "./Slides.jsx";
import {Form} from "./Form.jsx"

import fb from "./Images/facebook.png"
import inst from "./Images/facebook.png"
import twi from "./Images/facebook.png"
import  mail from "./Images/facebook.png"
import call from "./Images/facebook.png"

import"./Main.css";
import logo from "./Images/eastlogo.svg";
import indus from "./Images/indus.png";
import { useEffect, useState } from "react"
import { Navbar } from "./Navbar.jsx";
import emailjs from 'emailjs-com';
export const Main = () => {
    const [timer, setTimer] = useState(0);
    const [acre, setAcre] = useState(0);
    const [family, setFamily] = useState(0);
    const [project, setProject] = useState(0);

    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const [status, setStatus] = useState('');
    // const [timer, setTimer] = useState(10);

    useEffect(() => {
        const id = setInterval(() => {
            setTimer((prev) => {
                if(prev >= 209){
                    clearInterval(id);
                    return 210
                }
                return prev+1
            })
        }, 30)

        

        console.log( "Hello", typeof(id))

        const ac = setInterval(() => {
            setAcre((prev) => {
                if(prev >= 14){
                    // setAcre(0)
                    clearInterval(ac);
                    return 14
                }
                return prev+1
            })
            
        }, 200)

        const famil = setInterval(() => {
            setFamily((prev) => {
                if(prev >= 139){
                    // setAcre(0)
                    // clearInterval(acre);
                    return 140
                }
                return prev+1
            })
        }, 70)

        const pro = setInterval(() => {
            setProject((prev) => {
                if(prev >= 98){
                    // setAcre(0)
                    // clearInterval(acre);
                    return 99
                }
                return prev+1
            })
        }, 50)
      
        return () => {
            clearInterval(id)
            clearInterval(ac)
            clearInterval(famil)
            clearInterval(pro);
        }
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_ikikn8b', 'template_viyt97e', values, 'A5p3aZgjOitQbS0OP')
          .then(response => {
            console.log('SUCCESS!', response);
            setValues({
              name: '',
              phone: '',
              email: '',
            });
            setStatus('SUCCESS');
          }, error => {
            console.log('FAILED...', error);
          });
      }
    
      useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      }, [status]);
    
      const handleChange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.className]: e.target.value
        }))
        console.log(values)
      }

    return (
        <div id="main">
            <div className="top" id="home">
                <Slides/>
            </div>

            <div className="eyediv reveal">
                <h1 className="eyetext">EYE-CATCHING LOCATIONS WITH EXCEPTIONAL SPECIALTIES AT GREAT PRICES.</h1>
                <div className="eyeicons">
                    <div className="grid">
                        <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/12/plot2.png"} alt="" />
                        <p className="green">{timer}</p>
                        <p className="pt">Plots</p>
                    </div>
                    <div className="grid">
                        <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/12/Acre-icon-64x64-1.png"} alt="" />
                        <p className="green">{acre}</p>
                        <p className="pt">Acre project</p>
                    </div>
                    <div className="grid">
                        <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/12/Family-icon-64x64-1.png"} alt="" />
                        <p className="green">{family}+</p>
                        <p className="pt">Happy Families</p>
                    </div>
                    <div className="grid">
                        <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/12/bar-64x64-1.png"} alt="" />
                        <p className="green">{project}%</p>
                        <p className="pt">Project Completed</p>
                    </div>
                </div>
            </div>
            <section id="amenities">
            <div className="amenities reveal" >
                <h1 className="ameh1">Amenities</h1>
                <div className="lines cards">
                    <ul className="text-card">
                        <li>Club House</li>
                        <li>Green Spaces</li>
                        <li>Party Hall</li>
                        <li>Street Lights</li>
                        <li>Sewage Management</li>
                        <li>Park</li>
                    </ul>
                    <ul className="text-card">
                        <li>Water Tank</li>
                        <li>40’ and 30’ Wide Roads</li>
                        <li>Indoor Games</li>
                        <li>Premium gated locality</li>
                        <li>Electric Cabling</li>
                        <li>Rainwater Harvesting</li>
                    </ul>
                </div>
            </div>
            </section>
            
            <section id="project">
            <div className="project reveal" id="about">
                <div className="leftpro">
                    <h1 id="">About the project:</h1>
                    <hr />
                    <p>At Eastwood, we believe that mother earth is the greatest Equalizer. You can't get away from it. The heavenly nature land offers you beautiful and plots in Bangalore with the least price. Situated in the middle of green city <strong>Hoskote</strong> where you can raise your inner consciousness.</p>

                    
                    <div class="wrap">
                    <a href={require("./Images/IFB_Eastwood_Brochure.pdf")} download="IFB_Eastwood_Brochure">

                        <button class="button">
                            Download Brochure
                        </button>
                    </a>
                    </div>
                </div>
                <div className="rightpro">
                <iframe width="460" height="271" src="https://www.youtube.com/embed/FxUMDrrxAU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full-screen; allowfullscreen" allowfullscreen="allowfullscreen"></iframe>
                </div>
            </div>
            <div className="loc reveal" id="location">
                <h1>Location Advantages</h1>
                <div className="locmap">
                <ul className="adv">
                    <li>New Horizon School is situated at a distance of 5 mins drive.</li>
                    <li>Global Residential School is in the proximity of 11 mins drive.</li>
                    <li>Chokkahalli & Pilgumpe Industrial area is well connected.</li>
                    <li>Whitefield is at an easy distance.</li>
                    <li>Orion Uptown Mall is nearby.</li>
                    <li>MG road lies at an easy distance.</li>
                    <li>Kempegowda Inti Airport is well connected.</li>
                    <li>Outer Ring Road Junction is at easy connectivity.</li>
                </ul>
                <img className="map" src="https://www.ifbeastwood.com/wp-content/uploads/2021/12/new-map-min-500x500.jpg" alt="" />
                </div>

            </div>
            </section>
            
            <div className="formdiv" id="contact">
                    <div className="righth3">
                        <h3>BOOK A SITE VISIT NOW</h3>
                    </div>
                    <form action="" >
                    <input type="text" onChange={handleChange} value={values.name} className="name" placeholder="Name" required /><hr />
                    <input type="text" onChange={handleChange} value={values.email} className="email" placeholder="Email" required /><hr />
                    <input type="number" onChange={handleChange} value={values.phone} className="phone" placeholder="Mobile No" required /><hr />
                    <button onClick={handleSubmit} className="btn">Here You Go<img src={""} alt="" className="imgArrow"/></button>
                    </form>
                    
                </div>
            {/* <Form/> */}
            <section id="contactus">
            <div className="btm" >
            <div className="icns">

                <a href="https://www.facebook.com/ifbeastwood" target={1} className="fb"><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494479.png"} alt="" /></a>
                <a href="" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494481.png"} alt="" /></a>
                <a href="https://instagram.com/ifbeastwood_blr?igshid=YmMyMTA2M2Y=" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"} alt="" /></a>
                <a href="" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494487.png"} alt="" /></a>
                <a href="" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/552/552486.png"} alt="" className="mail" /></a>
                </div>
                <div className="address">
                    <p>Sy Nos. 31/7, 31/8, 31/11 & 35, Bagalur Village, Sulibele Hobli, Hoskote Taluk, Bangalore Rural – 562114</p>
                    <p>Contact us: +91 9606795107</p>
                    <h4>Rera No. PRM/KA/RERA/1250/304/PR/200219/003291</h4>
                </div>
                <hr />
                <div className="last">
                    <p>Strategic Partner</p>
                    <img className="induslogo" src={indus} alt="" />
                    
                </div>   
            </div>
            </section>
            
            
          
                
            
        </div>
    )
}