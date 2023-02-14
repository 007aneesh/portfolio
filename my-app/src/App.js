import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./Components/nav";
import Navbar2 from "./Components/nav2";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home navbar={Navbar1} />} />
          <Route path="/About" element={<About navbar={Navbar2} />} />
          <Route path="/Resume" element={<Resume navbar={Navbar2} />} />
          <Route path="/Projects" element={<Projects navbar={Navbar2} />} />
          <Route path="/Contact" element={<Contact navbar={Navbar2} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
