import {useState, createContext, useContext} from "react";
import { useNavigate } from "react-router";


const UserContext = createContext();
export const useUser = () => useContext(UserContext);


export function UserProvider({children}){
    const navigate = useNavigate();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    function login(userData){
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        navigate("/home");
    }
    function logout(){
        localStorage.removeItem("user");
        setUser(null);
        navigate("/")
    }

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}