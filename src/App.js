
import './App.css';
import { Navbar } from './Components/Navbar';
import { Main } from './Components/Main';
import Nav from "./Components/Nav.jsx"
import { Form } from './Components/Form';
import React, { useState } from "react";
import { AllRoutes } from './Components/AllRoutes';
function App() {

  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;