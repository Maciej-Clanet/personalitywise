import "./AuthPage.css"
import Logo from "../../Assets/Images/Logo.png"
import { useState } from "react"
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

    const {login} = useUser();


    const [isLogin, setIsLogin] = useState(true);
    function toggleForm(){
        setIsLogin(!isLogin);
    }

    function handleLogin(){

        setIsLoading(true);
        setError("");

        // delay 2s to simulate network call delay
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
                        <label for="username">Username:</label>
                        <input 
                            id="username" 
                            name="username" 
                            type="email" 
                            placeholder="example@gmail.com" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required/>

                        <label for="password">Password:</label>
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
                                 <span for="confirm-password">{/*Empty on purpose to act as spacer for grid*/}</span>
                                 <input 
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
                        <PrimaryButton 
                            text={isLogin ? "Login Now" : "Register Now"} 
                            type="submit" 
                            disabled={isLoading}
                            />
                        {error ? <div className="auth-error">{error}</div> : null}
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