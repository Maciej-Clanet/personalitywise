import "./MainLayout.css"
import { Outlet } from "react-router"
import SideNav from "../../../Components/SideNav/SideNav"

import { useUser } from "../../../Contexts/UserContext"
import LinkButton from "../../../Components/Inputs/LinkButton/LinkButton"

function ActionBar(){
    const {user, logout} = useUser();

    if(!user){
        return;
    }
    return(
        <div className="action-bar">
            <span>Welcome {user?.email || "Anon"}!</span>
            <LinkButton onClick={logout} text="Logout" />
        </div>
    )
}

export default function MainLayout(){

    return(
        <div class="main-layout">
            <SideNav/>
            <div class="main-content-wrapper">
                <div class="main-content subtle-scrollbar">
                    <ActionBar/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}