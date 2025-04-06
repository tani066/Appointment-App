import React, { createContext } from "react";
import { doctors } from "../assets/assets";

export const Context = createContext()

const ContextProvider = (props) => {
    const currencySymbol = '₹'
    const value = {
        doctors,
        currencySymbol
    }
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider