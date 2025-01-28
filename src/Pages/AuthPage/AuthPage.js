import "./AuthPage.css"
import Logo from "../../Assets/Images/Logo.png"
import { useState } from "react"
import PrimaryButton from "../../Components/Inputs/PrimaryButton/PrimaryButton"
import LinkButton from "../../Components/Inputs/LinkButton/LinkButton"
export function AuthLogo(){

    return(
        <div className="auth-logo-container">
            <img src={Logo} alt="Personality Wise Logo"/>
        </div>
    )
}

export default function AuthPage(){

    const [username, setUsername] = useState("");
    const [password, setPassowrd] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isLogin, setIsLogin] = useState(true);
    function toggleForm(){
        setIsLogin(!isLogin);
    }

    function handleLogin(){

    }

    function handleRegister(){

    }

    function handleSubmit(event){
        event.preventDefault();

        alert("submitted");
    }

    return(
        <div className="auth-page-layout">
            <div className="auth-form-container">
                <AuthLogo/>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h1 className="txt-4">{isLogin ? "Login" : "Register"}</h1>
                    <div className="auth-form-fields">
                        <label for="username">Username:</label>
                        <input id="username" name="username" type="email" placeholder="example@gmail.com" required/>

                        <label for="password">Password:</label>
                        <input id="password" name="password" type="password" placeholder="Password" required/>

                        {
                            !isLogin ? <>
                                 <span for="confirm-password">{/*Empty on purpose to act as spacer for grid*/}</span>
                                 <input id="confirm-password" name="confirm-password" type="password" placeholder="Confirm Password" required/>
                            </>
                            : <div style={{height: "36px"}}></div>
                        }
                    </div>
                    <div className="auth-form-actions">
                        <PrimaryButton text={isLogin ? "Login Now" : "Register Now"} type="submit" />
                        <div className="auth-form-toggle">
                            <span>{isLogin ? "Need an account?" : "Already have an account?"}</span>
                            <LinkButton text={isLogin ? "Register Here" : "Log in Here"} onClick={toggleForm}/>
                        </div>
                        
                    </div>

                </form>
            </div>
        </div>
    )
}