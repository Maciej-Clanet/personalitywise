import {Routes, Route, Navigate} from "react-router";
import { useUser } from "../../Contexts/UserContext";

import MainLayout from "../_Lauouts/MainLayout/MainLayout";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import SettingsPage from "../SettingsPage/SettingsPage";
import SecurityPage from "../SecurityPage/SecurityPage";
import BillingPage from "../BillingPage/BillingPage";

export default function PageRouting(){

    // extract user data from useUser hook (user data stored in context)
    const {user} = useUser();

    return(
        <Routes>
            {/* public route */}
            <Route path="/" element={<AuthPage/>}/>

            {/* protected routes, redirect to auth if not logged in */}
            <Route element={<MainLayout/>}>
                {/*because these routes are nested, the elements will be placed inside the "Outlet" component of the MainLayout component */}
                <Route path="home" element={user ? <HomePage/> : <Navigate to="/" />}/>
                <Route path="settings" element={user ?  <SettingsPage/> : <Navigate to="/" />}/>
                <Route path="billing" element={user ? <BillingPage/> : <Navigate to="/" />}/>
                <Route path="security" element={user ? <SecurityPage/> : <Navigate to="/" />}/>
            </Route>
        </Routes>
    )
}