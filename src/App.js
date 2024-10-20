//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils'
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[theme,setTheme] = useState('');

  const toggleMode = () => {
    //console.log("Inside")
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#46424f'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  const changeTheme = (button) => {
   
    console.log("Inside"+button.target.id)
    setTheme(button.target.id)
    console.log("Theme"+theme)
    if(theme==='primary'){
      //setTheme('primary');
      document.body.style.backgroundColor = '#007bff'
    }
    if(theme==='secondary'){
      //setTheme('secondary');
      document.body.style.backgroundColor = '#6c757d'
    }
    if(theme==='warning'){
      //setTheme('warning');
      document.body.style.backgroundColor = '#ffc107'
    }
    if(theme==='info'){
      //setTheme('info');
      document.body.style.backgroundColor = '#17a2b8'
    }
  }
  
  
  return (
    <>
        <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          theme={theme} changeTheme={changeTheme}
        />

        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextUtils heading="Enter text here" mode={mode} toggleMode={toggleMode}/>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
     
     {/* <About/> */}
     {/* <TextUtils heading="Enter text here" mode={mode} toggleMode={toggleMode}/> */}
    
    </>
  );
}

export default App;
