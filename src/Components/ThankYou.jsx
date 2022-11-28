import "./ThankYou.css"
import logo from "./Images/eastlogo.svg"
import { Link } from "react-router-dom"
import fb from "./Images/fb.webp";
import insta from "./Images/insta.webp";
import twitter from "./Images/twitter.webp";
import youtube from "./Images/youtube.webp";
import mail from "./Images/mail.webp";

export const ThankYou = () => {
    return (
        <div className="thank">
            <img src={logo} alt="" className="logothank"/>
            <h1>Thank You!</h1>
            <p>Our Team Will Get Back To You Soon.</p>

            <div className="icns">
                <a href="https://www.facebook.com/ifbeastwood" target={1} className="fb"><img src={fb} alt="" /></a>
                <a href="https://twitter.com/IfbEastwood_blr" target={1}><img src={twitter} alt="" /></a>
                <a href="https://instagram.com/ifbeastwood_blr?igshid=YmMyMTA2M2Y=" target={1}><img src={insta} alt="" /></a>
                <a href="https://www.youtube.com/watch?v=HxsRa_VWNXQ" target={1}><img src={youtube} alt="" /></a>
                <a href="mailto: ifbeastwoodblr@gmail.com" target={1}><img src={mail} alt="" className="mail" /></a>
                </div>
            <Link to="/">

            <p className="gotohome">Go To Home Page</p>
            </Link>
        </div>
    )
}