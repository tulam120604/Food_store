/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

const dataContext = createContext()

const Context_add_to_cart = ({ children }) => {
    const [cart, setCart] = useState([])
    return (<>
        <dataContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </dataContext.Provider>
    </>)
}

export { Context_add_to_cart, dataContext } 