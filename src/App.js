import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Nvabar from "./component/Nvabar";
import Textform from "./component/Textform";
import { useState } from "react";
import Alert from "./Alert";
// import About from "./component/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Functions from "./component/Functions";


function App() {
  const toggelMode=()=>
  {
    if(mode=='dark')
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled ","success")
      document.title = 'TextUtils-Lightmode'
      setInterval(()=>{
       document.title = 'TextUtils is amazing'
      },2000)
      setInterval(()=>
      {
        document.title = 'download our app'
      },1500)
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#6c757d'
      showAlert("Dark mode has been enabled ","success")
      document.title = 'TextUtils.DarkMode'
      setInterval(()=>{
       document.title = 'TextUtils is a best'
      },2000)
      setInterval(()=>{
          document.title = 'Download our app'
      },1500)
    }
  }
  const tuggelMode=()=>
  {
    if(rmode=='light')
    {
      setRMode('red')
      document.body.style.backgroundColor = 'red'
      showAlert(" Red mode has been enabled ","success")
    }
    else{
      setRMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode  has been enabled ","success")
    }
  }
  const tuggeMode=()=>
  {
    if(bmode=='light')
    {
      setBMode('blue')
      document.body.style.backgroundColor = 'blue'
      showAlert(" Blue mode has been enabled ","success")
    
    }
    else{
      setBMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode  has been enabled ","success")
    }
  }
  const[mode,setMode] = useState('light')
  const[alert,setAlert] = useState(null)
  const[rmode,setRMode] = useState('light')
  const[bmode,setBMode] = useState('light')

  const showAlert=(message ,type)=>
  {
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>
    {
setAlert(null)
    },1500);
  }

  return (
    <>
    {/* <Router> */}

<Nvabar title="TEXTUTILS" mode = {mode} rmode={rmode} bmode={bmode} toggleMode={toggelMode} tuggelMode={tuggelMode} tuggeMode={tuggeMode}/>
<Alert alert={alert}/>

<div className="container my-3">
<Textform  showAlert={showAlert} mode={mode}/> 
{/*  
<Switch>
          <Route exact path="/about">
            <About showAlert={showAlert}/>
          </Route>
          <Route exact path="/functions">
          <Functions mode={mode}/> 
          </Route>
          <Route exact path="/">
          
          </Route>
         
    </Switch> */}
</div>
{/* </Router> */}

    </>
);
}

export default App;
 