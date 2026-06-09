
import React, { useContext } from "react";
import './../styles/App.css';
import { AppContext } from "./context/AppContext";

const App = () => {
  const {check,handleChange}=useContext(AppContext);
  return (
    <div>
        {check ? "You are now authenticated,you can proceed" :"you are not authenticated"}
        <br></br>
       <input type="checkbox" id="chx"  checked={check} onChange={handleChange}/>
       <label htmlFor="chx">I'm not a robot</label>
    </div>
  )
}

export default App
