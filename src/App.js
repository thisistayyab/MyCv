import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [mode, setmode] = useState("light");
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Card mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path="/" element={<Summary mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/summary" element={<Summary mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/education" element={<Education mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/experience" element={<Experience mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/skill" element={<Skills mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/contact" element={<Contact mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/projects" element={<Projects mode={mode} toggleMode={toggleMode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
