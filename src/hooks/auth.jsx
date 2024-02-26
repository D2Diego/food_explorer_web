import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api"

const AuthContext = createContext({});

function AuthProvider({children}){

    const [ data, setData] = useState({});

    async function singIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } =  response.data;

            localStorage.setItem("@ecommerce:user", JSON.stringify(user));
            localStorage.setItem("@ecommerce:token", token);

            api.defaults.headers.authorizations = `Bearer ${token}`
            setData({ user, token})

            console.log(user, token)
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@ecommerce:token")
        localStorage.removeItem("@ecommerce:user")

        setData({})
    }

    useEffect(() => {
       const token = localStorage.getItem("@ecommerce:token");
       const user =  localStorage.getItem("@ecommerce:user");

        if(token && user){
            api.defaults.headers.authorizations = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{ singIn,signOut ,user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth } 