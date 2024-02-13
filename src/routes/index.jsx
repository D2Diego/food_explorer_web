import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from './admin.routes'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes(){
    return(
        <BrowserRouter>
            <AdminRoutes/>
        </BrowserRouter>
    )
}