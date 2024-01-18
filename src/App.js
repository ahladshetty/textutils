import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  }

  const [alert, setAlert] = useState(null)

    const showAlert = (message,type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }

  return (
    <>
    <Router>

    <Navbar title="TextUtils2" aboutText="About2"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Textform heading='Enter the text' mode={mode} showAlert={showAlert}/>}/>
      </Routes>
      </div>
      </Router>

    
    
    
    </>
  );
}
export default App;