import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn ] = useState(false)
}