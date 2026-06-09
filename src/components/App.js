import React, { useContext } from "react";
import "./../styles/App.css";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { check, handleChange } = useContext(AppContext);
  return (
    <div>
      {check ? (
        <p className="authText">You are now authenticated,you can proceed</p>
      ) : (
        <p>you are not authenticated</p>
      )}

      <input type="checkbox" id="chx" checked={check} onChange={handleChange} />
      <label htmlFor="chx">I'm not a robot</label>
    </div>
  );
};

export default App;
