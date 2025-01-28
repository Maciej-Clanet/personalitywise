import "./MainLayout.css"
import { Outlet } from "react-router"
import SideNav from "../../../Components/SideNav/SideNav"

export default function MainLayout(){

    return(
        <div class="main-layout">
            <SideNav/>
            <div class="main-content-wrapper">
                <div class="main-content subtle-scrollbar">
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}