import "./AuthPage.css"
import Logo from "../../Assets/Images/Logo.png"
import { useState } from "react"
import PrimaryButton from "../../Components/Inputs/PrimaryButton/PrimaryButton"

export function AuthLogo(){

    return(
        <div className="auth-logo-container">
            <img src={Logo} alt="Personality Wise Logo"/>
        </div>
    )
}

export default function AuthPage(){

    const [isLogin, setIsLogin] = useState(true);


    return(
        <div className="auth-page-layout">
            <div className="auth-form-container">
                <AuthLogo/>
                <form className="auth-form">
                    <h1 className="txt-4">{isLogin ? "Login" : "Register"}</h1>
                    <div className="auth-form-fields">
                        <label for="username">Username:</label>
                        <input id="username" name="username" type="email" placeholder="example@gmail.com" required/>

                        <label for="password">Password:</label>
                        <input id="password" name="password" type="password" placeholder="example@gmail.com" required/>
                    </div>
                    <PrimaryButton text="Login Now" type="submit" />
                </form>
            </div>
        </div>
    )
}