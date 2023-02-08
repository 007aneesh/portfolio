import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
