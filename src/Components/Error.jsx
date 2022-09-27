import { Link } from "react-router-dom"
import "./Error.css"

export const Error = () => {
    return(
        <div className="error">
            <h1 className="errorh1" id="errorh1" >404 Page Error</h1>
            <br />

            <Link to="/" style={{fontSize: "20px", border: "1px solid blue", padding: "3px", borderRadius: "5px"}}>Go To Home Page</Link>
        </div>
    )
}