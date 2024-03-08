import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
//import { type } from '@testing-library/user-event/dist/type';
import { Routes, Route } from "react-router-dom";

import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark"); //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils -dark mode enable";
      // setInterval(()=>
      //   {
      //     document.title='TextUtils -is Amazing';

      //   },1000);

      //   setInterval(()=>
      //   {
      //     document.title='Install TextUtils now';

      //   },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#042743";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils -Light mode enable";
    }
  };
  const [Pmode, LatestMode] = useState("dark");
  const tgMode = () => {
    if (Pmode === "dark") {
      LatestMode("l");
      document.body.style.backgroundColor = "grey";
    } else {
      LatestMode("d");
      document.body.style.backgroundColor = "#FFC0CB";
    }
  };

  const [alert, setAlert] = useState({ message: null, type: null });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 30000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          tgMode={tgMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
