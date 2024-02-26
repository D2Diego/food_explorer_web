import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api"

const AuthContext = createContext({});

function AuthProvider({children}){

    const [ data, setData] = useState({ user: null, token: null, isAdmin: false });

    async function singIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } =  response.data;

            const isAdmin = user.role === 'admin'

            localStorage.setItem("@ecommerce:user", JSON.stringify(user));
            localStorage.setItem("@ecommerce:token", token);

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({ user, token, isAdmin})

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

        setData({ user: null, token: null, isAdmin: false })
    }

    useEffect(() => {
       const token = localStorage.getItem("@ecommerce:token");
       const user =  localStorage.getItem("@ecommerce:user");

        if(token && user){
            const parsedUser = JSON.parse(user);
            const isAdmin = parsedUser.role === 'admin';

            api.defaults.headers.authorization = `Bearer ${token}`

            setData({
                token,
                user: parsedUser,
                isAdmin
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{ singIn, signOut , ...data }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth } 