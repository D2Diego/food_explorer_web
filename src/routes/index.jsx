import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"

import { AdminRoutes } from './admin.routes'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes(){
    const { user, isAdmin } = useAuth();

    return(
        <BrowserRouter>
            {user ? (isAdmin ? <AdminRoutes /> : <AppRoutes />) : <AuthRoutes />}
        </BrowserRouter>
    )
}
