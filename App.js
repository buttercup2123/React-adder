import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router,Route,Routes,Link}from "react-router-dom"
import Home from "./Home"
import Adder from "./Adder"

export default function App(){
  return(
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/Home"></Link></li>
            <li><Link to="/Adder">Adder</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Adder"element={<Adder/>}/>
      </Routes>

    </Router>
  );
}

