import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Food } from '../pages/Food'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/food/:id' element={<Food/>}/>
        </Routes>
    )
}