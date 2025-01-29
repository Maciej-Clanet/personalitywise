import {useState, createContext, useContext} from "react";

const SettingsContext = createContext()
export const useSettings = () => useContext(SettingsContext);


export function SettingsProvider({children}){

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light-theme"
    );

    function toggleTheme(){
        if(theme === "light-theme"){
            setTheme("dark-theme");
            localStorage.setItem("theme", "dark-theme")
        } else{
            setTheme("light-theme");
            localStorage.setItem("theme", "light-theme")
        }
    }

    return(
        <SettingsContext.Provider value={{theme, toggleTheme}}>
            {children}
        </SettingsContext.Provider>
    )
}