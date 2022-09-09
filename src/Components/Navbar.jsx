import "./Navbar.css"
import logo from "./Images/eastlogo.svg"
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftnav">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="rightnav">
                <a href="#">Home</a>
                <a href="#project">About Us</a>
                <a href="#amenities">Amenities</a>
                <a href="#contactus">Contact</a>
                <a className="dow" href={require("./Images/IFB_Eastwood_Brochure.pdf")} download="IFB_Eastwood_Brochure">Download Brochure</a>
            </div>
            <div class="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{display:"none",right:0,border: "none", animation: "none"}} id="rightMenu">
            <button onclick="closeRightMenu()" class="w3-bar-item w3-button w3-large">Close &times;</button>
            <a href="#" class="w3-bar-item w3-button">Link 1</a>
            <a href="#" class="w3-bar-item w3-button">Link 2</a>
            <a href="#" class="w3-bar-item w3-button">Link 3</a>
            </div>

            <div class="w3-teal">
            <button class="w3-button w3-teal w3-xlarge w3-right" onclick="openRightMenu()">&#9776;</button>
            </div>
        </div>
    )
}