import "./SideNav.css"
import { NavLink } from "react-router"

import HomeIcon from "../../Assets/Icons/home-icon.svg"
import SettingsIcon from "../../Assets/Icons/settings-icon.svg"
import CardIcon from "../../Assets/Icons/card-icon.svg"
import PadlockIcon from "../../Assets/Icons/padlock-icon.svg"

export default function SideNav(){
    return(
        <header className="side-nav">
            <NavLink className="side-nav-btn" to="/home"><img src={HomeIcon} alt="home icon"/><span>Home</span></NavLink>
            <NavLink className="side-nav-btn" to="/settings"><img src={SettingsIcon} alt="settings icon"/><span>Settings</span></NavLink>
            <NavLink className="side-nav-btn" to="/billing"><img src={CardIcon} alt="Card icon"/><span>Billing</span></NavLink>
            <NavLink className="side-nav-btn" to="/security"><img src={PadlockIcon} alt="home icon"/><span>Security</span></NavLink>
        </header>
    )
}