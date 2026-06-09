import React from "react";
import { Children, createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [check, setCheck] = useState(false);

  function handleChange() {
    setCheck((prev) => !prev);
  }

  const value = {
    check,
    setCheck,
    handleChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
