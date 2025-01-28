import {Routes, Route, Navigate} from "react-router";
import { useUser } from "../../Contexts/UserContext";

import MainLayout from "../_Lauouts/MainLayout/MainLayout";
import AuthPage from "../AuthPage/AuthPage";


export default function PageRouting(){

    const {user} = useUser();
    console.log(user);

    return(
        <Routes>
            {/* public route */}
            <Route path="/" element={<AuthPage/>}/>

            {/* protected routes */}
            <Route element={<MainLayout/>}>
                <Route path="home" 
                element={user ? <div>Home page</div> : <Navigate to="/" />}/>
                <Route path="settings" element={user ?  <div>Settings page</div> : <Navigate to="/" />}/>
                <Route path="billing" element={user ? <div>Billing page</div> : <Navigate to="/" />}/>
                <Route path="security" element={user ? <div>Security page</div> : <Navigate to="/" />}/>
            </Route>
        </Routes>
    )
}