import Slides from "./Slides.jsx";

import fb from "./Images/facebook.png"
import inst from "./Images/facebook.png"
import twi from "./Images/facebook.png"
import  mail from "./Images/facebook.png"
import call from "./Images/facebook.png"
import icon1 from "./Images/icon1.png"
import icon2 from "./Images/icon2.png"
import icon3 from "./Images/icon3.png"
import icon4 from "./Images/icon4.png"


import"./Main.css";
import logo from "./Images/eastlogo.svg";
import indus from "./Images/indus.png";
import { useEffect, useState } from "react"
import { Navbar } from "./Navbar.jsx";
import axios from "axios"
import { Form } from "./Form.jsx";
import { PopupDiv } from "./PopUp.jsx";
export const Main = () => {
    const [timer, setTimer] = useState(0);
    const [acre, setAcre] = useState(0);
    const [family, setFamily] = useState(0);
    const [project, setProject] = useState(0);

   
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

    return (
        <div id="main">
            <div className="top" id="home">
                <Slides/>
            </div>

            <div className="eyediv reveal">
                <h1 className="eyetext">EYE-CATCHING LOCATIONS WITH EXCEPTIONAL SPECIALTIES AT GREAT PRICES.</h1>
                <div className="eyeicons">
                    <div className="grid">
                        <img src={icon1} alt="" />
                        <p className="green">{timer}</p>
                        <p className="pt">Plots</p>
                    </div>
                    <div className="grid">
                        <img src={icon2} alt="" />
                        <p className="green">{acre}</p>
                        <p className="pt">Acre project</p>
                    </div>
                    <div className="grid">
                        <img src={icon3} alt="" />
                        <p className="green">{family}+</p>
                        <p className="pt">Happy Families</p>
                    </div>
                    <div className="grid">
                        <img src={icon4} alt="" />
                        <p className="green">{project}%</p>
                        <p className="pt" >Project Completed</p>
                    </div>
                </div>
                <p id="amenities"></p>
            </div>
            <section >
            <div className="amenities reveal" >
                <h1 className="ameh1">Amenities</h1>
                <hr />
                <div className="lines cards">
                    <ul className="text-card">
                        <li>Club House</li>
                        <li>Green Spaces</li>
                        <li>Party Hall</li>
                        <li>Street Lights</li>
                        <li>Sewage Management</li>
                        <li>40’ and 30’ Wide Roads</li>
                    </ul>
                    <ul className="text-card" >
                        <li>Water Tank</li>
                        <li>Premium gated locality</li>
                        <li>Indoor Games</li>
                        <li>Electric Cabling</li>
                        <li id="about">Park</li>
                        <li id="project">Rainwater Harvesting</li>
                    </ul>
                </div>
            </div>
            </section>
            
            <section >
            <div className="proj reveal">
                <h1 id="">About the project:</h1>
                        <hr />
                <div className="project">
                    <div className="leftpro">
                       
                        <p>At Eastwood, we believe that mother earth is the greatest Equalizer. You can't get away from it. The heavenly nature land offers you beautiful and plots in Bangalore with the least price. Situated in the middle of green city <strong>Hoskote</strong> where you can raise your inner consciousness.</p>

                        
                        {/* <div class="wrap">
                        <a href={require("./Images/IFB_Eastwood_Brochure.pdf")} download="IFB_Eastwood_Brochure">

                            <button class="button">
                                Download Brochure
                            </button>
                        </a>
                        </div> */}

                    </div>
                    
                    <div className="rightpro">
                    <iframe id="download" width="460" height="271" src="https://www.youtube.com/embed/HxsRa_VWNXQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoPlay="true"></iframe>
                    </div>
                    <p ></p>
                    </div>
                <div>
                    <PopupDiv/>
                </div>
                
            </div>
            <div className="loc reveal" id="location">
                <h1>Location Advantages</h1>
                <hr />
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
                <div className="googlemap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0918132842153!2d77.85673461954102!3d13.156608361099371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae075351f94731%3A0x16a6269175d7282e!2sEastwood%20-%20Residential%20Plots%20In%20Hoskote!5e0!3m2!1sen!2sin!4v1663232742972!5m2!1sen!2sin" width="600" height="380" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>

            </div>
            </section>
            
            {/* <div className="formdiv" id="contact">
                    <div className="righth3">
                        <h3>BOOK A SITE VISIT NOW</h3>
                    </div>
                    <form action="" >
                    <input type="text" onChange={handleChange} value={values.name} className="name" placeholder="Name" required /><hr />
                    <input type="text" onChange={handleChange} value={values.email} className="email" placeholder="Email" required /><hr />
                    <input type="number" onChange={handleChange} value={values.phone} className="phone" placeholder="Mobile No" required /><hr />
                    <button onClick={handleSubmit} className="btn">Here You Go<img src={""} alt="" className="imgArrow"/></button>
                    </form>
                    
                </div> */}
                <p id="form"></p>
        <div  className="mobiform" >
            <Form/>
            <p id="contact"></p>
        </div>
            <section id="contactus">
            <div className="btm" >
            <div className="icns">
                <a href="https://www.facebook.com/ifbeastwood" target={1} className="fb"><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494479.png"} alt="" /></a>
                <a href="https://twitter.com/IfbEastwood_blr" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494481.png"} alt="" /></a>
                <a href="https://instagram.com/ifbeastwood_blr?igshid=YmMyMTA2M2Y=" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"} alt="" /></a>
                <a href="https://www.youtube.com/watch?v=HxsRa_VWNXQ" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494487.png"} alt="" /></a>
                <a href="mailto: ifbeastwoodblr@gmail.com" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/552/552486.png"} alt="" className="mail" /></a>
                </div>
                <div className="address">
                    <div className="addiv">
                    <p><strong>Address</strong></p>
                    <p>Sy Nos. 31/7,</p>
                    <p>31/8, 31/11 & 35,</p>
                    <p>Bagalur Village,</p>
                        <p>Sulibele Hobli, Hoskote Taluk,</p>
                        <p>Bangalore Rural – 562114.</p>
                        <p>Karnataka.</p>
                        
                    </div>
                    <div className="addiv">
                        
                    <p><strong>Contact us</strong></p> 
                    <p><a href="tel:+919707822822">+91 9707 822 822</a></p>
                    <p><a href="tel:+919606795107">+91 9606 795 107</a></p>

                    </div>
                </div>
                <small>
                    <p className="rera"><strong>RERA No. PRM/KA/RERA/1250/304/PR/200219/003291</strong></p>

                </small>
                {/* <hr /> */}
                <div className="last">
                    <p>Strategic Partner</p>
                    <img className="induslogo" src={indus} alt="" />                  
                </div>   
            </div>
            <div className="policy">
                <h3><strong>Privacy Policy Disclaimer</strong></h3>
                <p className="lastp">We request information from you when you register on our site or fill out a form. While filling out a form on our website, you can be asked to submit your name, email address, and phone number for any of the aforementioned reasons. You are welcome to visit our website anonymously, nevertheless. Any information we learn about you is used to personalise your visit, improve our website, and improve customer service. Any information gathered will not be shared with any third parties, according to the privacy disclaimer clause.
                We may collect the following informations like Name, Email address and Contact number.</p>
                
                <p>Copyright 2022 | All Rights Reserved By Eastwood</p>
                
            </div>
            </section>     
        </div>
    )
}