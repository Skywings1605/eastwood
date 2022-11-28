import "./Navbar.css"
import logo from "./Images/eastlogo.svg"
import 'reactjs-popup/dist/index.css';
import "./PopUp.css";
import CustomizedDialogs from "./Dialog.jsx";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftnav">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="rightnav">
                <a className="anav" href="#">Home</a>
                <a className="anav" href="#project">About Us</a>
                <a className="anav" href="#amenities">Amenities</a>
                <a className="anav" href="#contactus">Contact</a>
                <CustomizedDialogs/>
            </div>
          
        </div>
    )
}