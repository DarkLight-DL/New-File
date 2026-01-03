import React, { createContext, useState } from 'react'

const ThemeContext = createContext()
export const ThemeProvider = ({children}) => {
    const[modeColor,setModeColor]=useState(false)

    const handleColor=()=>{
        setModeColor(prev => !prev)
    }
  return (
    <ThemeContext.Provider value={{modeColor,handleColor}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
