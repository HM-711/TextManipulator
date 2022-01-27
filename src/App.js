import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  let showAlert = (message,type)=>{
      setalert({
        msg: message,
        type: type
      })

      setTimeout(() => {
          setalert(null);
      }, 1500);
  }

  let toggleMode = ()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor = "rgb(33, 37, 41)";
      showAlert("Dark mode has been enabled","success");
      // document.title("TextUtils - Dark Mode");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled","success");
      // document.title("TextUtils - Light Mode");
    }
  }
  return (
    <>
      <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text to Analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;