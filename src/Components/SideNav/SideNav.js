import "./SideNav.css"
import { NavLink } from "react-router"

import HomeIcon from "../../Assets/Icons/home-icon.svg"
import SettingsIcon from "../../Assets/Icons/settings-icon.svg"
import CardIcon from "../../Assets/Icons/card-icon.svg"
import PadlockIcon from "../../Assets/Icons/padlock-icon.svg"

import { useSettings } from "../../Contexts/SettingsContext"

// Using NavLink instead of Link as it automatically detects which page we are on, and adds "active" class to the corresponding link.
// This is how the current page gets highlighted in the side bar.

export default function SideNav(){
    
    const {theme, toggleTheme} = useSettings()
    
    return(
        <header className="side-nav">
            <NavLink className="side-nav-btn" to="/home"><img src={HomeIcon} alt="home icon"/><span>Home</span></NavLink>
            <NavLink className="side-nav-btn" to="/settings"><img src={SettingsIcon} alt="settings icon"/><span>Settings</span></NavLink>
            <NavLink className="side-nav-btn" to="/billing"><img src={CardIcon} alt="Card icon"/><span>Billing</span></NavLink>
            <NavLink className="side-nav-btn" to="/security"><img src={PadlockIcon} alt="home icon"/><span>Security</span></NavLink>
        
            {/* toggle theme should be refactored into its own component */}
            <button onClick={toggleTheme} className="theme-button">{theme === "light-theme" ? "dark-mode" : "light-mode"}</button>
        </header>
    )
}