import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {

  // ---------------------------------------- Mode:- Dark and Light -----------------------------------

  const [mode, setMode] = useState('light'); // Whether dark mode is enables or not

  // ----------------------- Alerts ------------------------:- 

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1700);
  }


  // -----------------------------------------------------For other colors-----------------------------------------------
  const removeBgClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    // document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
    // console.log(cls)
    removeBgClasses(); // Calling this function to remove the onclick classes for different colors
    document.body.classList.add('bg-'+cls); // For other colors
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#080043';
      showAlert("Dark Mode Enabled", "success");
      document.getElementById('labelText').innerText = "Disable Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.getElementById('labelText').innerText = "Enable Dark Mode";
    }
  }

  return (
    <>
    <Router>
        <Navbar title="TextTools" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
        <div style={{height:'50px'}}>
          <Alert alert={alert}/>
        </div>
        
          <div className="container my-3">
          <Switch>
              <Route exact path="/about">
                <About toggleMode = {toggleMode} mode = {mode} />
              </Route>

              <Route exact path="/">
              <TextForm heading = "TextTools - Word Conter, Character Counter, remove extra spaces" mode = {mode} showAlert = {showAlert} />
              </Route>
          </Switch>
            {/* <About/> */}
          </div>
    </Router>
    </>
  );
}

export default App;
