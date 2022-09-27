import "./ThankYou.css"
import logo from "./Images/eastlogo.svg"
import { Link } from "react-router-dom"

export const ThankYou = () => {
    return (
        <div className="thank">
            <img src={logo} alt="" className="logothank"/>
            <h1>Thank You!</h1>
            <p>Our Team Will Get Back To You Soon.</p>

            <div className="icns">
                <a href="https://www.facebook.com/ifbeastwood" target={1} className="fb"><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494479.png"} alt="" /></a>
                <a href="https://twitter.com/IfbEastwood_blr" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494481.png"} alt="" /></a>
                <a href="https://instagram.com/ifbeastwood_blr?igshid=YmMyMTA2M2Y=" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"} alt="" /></a>
                <a href="https://www.youtube.com/watch?v=HxsRa_VWNXQ" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494487.png"} alt="" /></a>
                <a href="mailto: ifbeastwoodblr@gmail.com" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/552/552486.png"} alt="" className="mail" /></a>
                </div>
            <Link to="/">

            <p className="gotohome">Go To Home Page</p>
            </Link>
        </div>
    )
}