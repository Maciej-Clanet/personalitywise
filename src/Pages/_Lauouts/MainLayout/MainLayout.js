import "./MainLayout.css"
import { Outlet } from "react-router"
import SideNav from "../../../Components/SideNav/SideNav"

import { useUser } from "../../../Contexts/UserContext"
import LinkButton from "../../../Components/Inputs/LinkButton/LinkButton"

function ActionBar(){
    const {user, logout} = useUser();

    if(!user){
        // if someone manually types in an url to a protected page without being logged in, 
        // this will make sure that in the split second before a redirect to auth, the component won't try to access undefined data.
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
        <div className="main-layout">
            <SideNav/>
            <div className="main-content-wrapper">
                <div className="main-content subtle-scrollbar">
                    {/* action bar is at the top of every page */}
                    <ActionBar/>

                    {/* outlet is where the current page content will be placed */}
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}