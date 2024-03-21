import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import NoteState from "./context/notes/NoteState";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./components/Signup";


function App() {
  return (
    <>
    <NoteState>
      <Router>
      <NavBar />
    <Alert message="This is amazing React course" />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/signup" element={<Signup/> } />



        </Routes>
        </div>
      </Router>
      </NoteState>
    
    </>
  );
}

export default App;
