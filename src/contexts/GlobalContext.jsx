import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
