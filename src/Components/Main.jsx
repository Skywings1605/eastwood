import Slides from "./Slides.jsx"
import"./Main.css"
import { useEffect, useState } from "react"
export const Main = () => {
    const [timer, setTimer] = useState(0);
    const [acre, setAcre] = useState(0);
    const [family, setFamily] = useState(0);
    const [project, setProject] = useState(0);


    // const [timer, setTimer] = useState(10);

    useEffect(() => {
        const id = setInterval(() => {
            console.log("Hello Manju");
            setTimer((prev) => {
                if(prev >= 209){
                    clearInterval(id);
                    return 210
                }
                return prev+1
            })
        }, 30)

        const ac = setInterval(() => {
            console.log("Hello Manju");
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
            console.log("Hello Manju");
            setFamily((prev) => {
                if(prev >= 79){
                    // setAcre(0)
                    // clearInterval(acre);
                    return 80
                }
                return prev+1
            })
        }, 70)

        const pro = setInterval(() => {
            console.log("Hello Manju");
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
            console.log("Stopped")
        }

    },[])


    
     const famFun = () => {
        
     }
     const proFun = () => {
        const famil = setInterval(() => {
            console.log("Hello Manju");
            setProject(project+1)
        }, 500)
        // return () => {
        //     clearInterval(proFun);
        //     console.log("Stopped")
        // }
     }
    return (
        <div>
            <div className="top" id="home">
                <Slides/>
            </div>
            <div className="eyediv">
                <h1 className="eyetext">EYE-CATCHING LOCATIONS WITH EXCEPTIONAL SPECIALTIES AT GREAT PRICES.</h1>
                <div className="eyeicons">
                    <div className="grid">
                        <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/12/plot2.png"} alt="" />
                        <p className="green">{timer}</p>
                        <p>Plots</p>
                    </div>
                    <div className="grid">
                        <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/12/Acre-icon-64x64-1.png"} alt="" />
                        <p className="green">{acre}</p>
                        <p>Acre project</p>
                    </div>
                    <div className="grid">
                        <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/12/Family-icon-64x64-1.png"} alt="" />
                        <p className="green">{family}+</p>
                        <p>Happy Families</p>
                    </div>
                    <div className="grid">
                        <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/12/bar-64x64-1.png"} alt="" />
                        <p className="green">{project}%</p>
                        <p>Project Completed</p>
                    </div>
                </div>
            </div>
            <div className="amenities" id="amenities">
                <h1 className="ameh1">Amenities</h1>
                <div className="lines">
                    <ul>
                        <li>Club House</li>
                        <li>Green Spaces</li>
                        <li>Party Hall</li>
                        <li>Street Lights</li>
                        <li>Sewage Management</li>
                        <li>Park</li>
                    </ul>
                    <ul>
                        <li>Water Tank</li>
                        <li>40’ and 30’ Wide Roads</li>
                        <li>Indoor Games</li>
                        <li>Premium gated locality</li>
                        <li>Electric Cabling</li>
                        <li>Rainwater Harvesting</li>
                    </ul>
                </div>
            </div>
            <div className="project" id="about">
                <div className="leftpro">
                    <h1>About the project:</h1>
                    <hr />
                    <p>At Eastwood, we believe that mother earth is the greatest Equalizer. You can't get away from it. The heavenly nature land offers you beautiful and plots in Bangalore with the least price. Situated in the middle of green city <strong>Hoskote</strong> where you can raise your inner consciousness.</p>
                </div>
                <div className="rightpro">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FxUMDrrxAU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="loc" id="location">
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
            <div className="btm" id="contact">
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com/ifbeastwood"><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494479.png"} alt="" /></a>
                <a href=""><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494481.png"} alt="" /></a>
                <a href=""><img src={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"} alt="" /></a>
                <a href=""><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494487.png"} alt="" /></a>
                <a href=""><img src={"https://cdn-icons-png.flaticon.com/128/720/720277.png"} alt="" /></a>
            </div>

        </div>
    )
}