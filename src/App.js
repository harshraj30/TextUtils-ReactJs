// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Textform } from './components/Textform';
import { Alert } from './components/Alert';
// import { About } from './components/About';
// import { BrowserRouter as Route, Switch, Routes } from "react-router-dom";
// import { Switch, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("white")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const [btnText, setBtnText] = useState("Dark")

  const toggleMode = () => {
    if (mode === "white") {
      setMode("black")
      document.body.style.backgroundColor = "#292929"
      showAlert("Dark mood has been enabled...", "Success")
      setBtnText("Light")
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = 'favbar chamekega'
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'install warna favbar chamekega'
      // }, 1500);
    }
    else {
      setMode("white")
      document.body.style.backgroundColor = "white"
      showAlert("Light mood has been enabled...", "Success")
      setBtnText("Dark")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <> 
      <Navbar btnText={btnText} mode={mode} toggelMode={toggleMode} title="TextUtils" />
      <Alert mode={mode} alert={alert} />
      <div className="">
        <Textform showAlert={showAlert} mode={mode} heading="Enter Text Here" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
