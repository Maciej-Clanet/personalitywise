import "./MainLayout.css"
import { Outlet } from "react-router"

export default function MainLayout(){

    return(
        <div class="main-layout">
            <div>header will go here</div>
            <div class="main-content-wrapper">
                <div class="main-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}