import { Route, Routes } from "react-router-dom"
import { Error } from "./Error"
import { LandingPage } from "./LandingPage"
import { ThankYou } from "./ThankYou"

export const AllRoutes = () => {
    return(
        <div className="App">
            <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/thankyou" element={<ThankYou/>}></Route>
            <Route path="/error" element={<Error/>}></Route>
            </Routes>
        </div>
    )
}