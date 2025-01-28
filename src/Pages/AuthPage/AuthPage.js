import "./AuthPage.css"
import Logo from "../../Assets/Images/Logo.png"
import { useEffect, useState } from "react"
import PrimaryButton from "../../Components/Inputs/PrimaryButton/PrimaryButton"
import LinkButton from "../../Components/Inputs/LinkButton/LinkButton"
import { useUser } from "../../Contexts/UserContext"

const fakeUserDb = {
    "admin@personalitywise.co.uk": {
        "password" : "1234",
        "email" : "admin@personalitywise.co.uk"
    }
}

export function AuthLogo(){
    return(
        <div className="auth-logo-container">
            <img src={Logo} alt="Personality Wise Logo"/>
        </div>
    )
}

export default function AuthPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState("");

    //handling auth state is all done inside UserContext
    const {login} = useUser();

    const [animateConfirm, setAnimateConfirm] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    // I'm delaying changing back to login form to play the animation before removing the input field
    function toggleForm(){
        if(isLogin){
            setIsLogin(false);
        } else{
            setAnimateConfirm(false);
            setTimeout(() => {
                setIsLogin(true);
            }, 200);
        }
    }

    // using effect to make start animation any time we get back to register page.
    useEffect(() => {
        if(!isLogin){
            setAnimateConfirm(true);
        }
    }, [isLogin])

    function handleLogin(){

        setIsLoading(true);
        setError("");
        setRegisterSuccess("")

        // delay 2s to simulate network call delay
        // I don't have a backend so I'm not using fetch, I promise I can use fetch though.
        setTimeout(() => {

            if(!fakeUserDb[username]){
                setError("Invalid Credentials");
                setIsLoading(false);
                return;
            }

            if(fakeUserDb[username]["password"] !== password){
                setError("Invalid Credentials");
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
            login(fakeUserDb[username])

        }, 1000)

    }

    function handleRegister(){

        setRegisterSuccess("")
        setIsLoading(true);
        setError("");

        if(password !== confirmPassword){
            setError("Passwords need to match");
            setIsLoading(false);
            return;
        }



        setTimeout(() => {
            setRegisterSuccess("Account made, check emails!");
            setIsLoading(false);
        }, 1000)
    }

    function handleSubmit(event){
        event.preventDefault();

        if(isLogin){
            handleLogin();
        } else{
            handleRegister();
        }
    }

    return(
        <div className="auth-page-layout">
            <div className="auth-form-container">
                <AuthLogo/>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h1 className="txt-4">{isLogin ? "Login" : "Register"}</h1>
                    <div className="auth-form-fields">
                        <label htmlFor="username">Username:</label>
                        <input 
                            id="username" 
                            name="username" 
                            type="email" 
                            placeholder="example@gmail.com" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required/>

                        <label htmlFor="password">Password:</label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {
                            !isLogin ? <>
                                 <span>{/*Empty on purpose to act as spacer for grid*/}</span>
                                 <input 
                                    className={`animated-input ${animateConfirm ? "animate" : null}`}
                                    id="confirm-password" 
                                    name="confirm-password" 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required/>
                            </>
                            : <div style={{height: "36px"}}></div>
                        }
                    </div>
                    <div className="auth-form-actions">
                        {registerSuccess ? <div className="auth-success">{registerSuccess}</div> : null}
                        {error ? <div className="auth-error">{error}</div> : null}
                        <PrimaryButton 
                            text={isLogin ? "Login Now" : "Register Now"} 
                            type="submit" 
                            disabled={isLoading}
                            />
                       
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