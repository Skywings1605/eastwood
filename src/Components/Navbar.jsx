import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftnav">
                <img src={"https://www.ifbeastwood.com/wp-content/uploads/2021/11/IFBAsset.png"} alt="" />
            </div>
            <div className="rightnav">
                <a href="/">Home</a>
                <a href="#about">About Us</a>
                <a href="#amenities">Amenities</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}