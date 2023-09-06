import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert('success' , 'enabled dark mode')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('success' , 'enabled light mode')
    }
  };

  const [alert , setAlert] = useState(null);

  const showAlert = (type , message) => {
      setAlert({
        type: type,
        message: message
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  return (
    <>
      <Navbar title="MyAPP" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert} />
      <Textform heading="Myform" mode={mode} showAlert={showAlert}/>
      <About mode={mode} />
    </>
  );
}

export default App;
