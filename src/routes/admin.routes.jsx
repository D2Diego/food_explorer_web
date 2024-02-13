import { Routes, Route } from 'react-router-dom'

import { HomeAdmin } from '../pages/Admin/HomeAdmin'
import { FoodAdmin } from '../pages/Admin/FoodAdmin'
import { NewFood } from '../pages/Admin/NewFood'
import { EditFood } from '../pages/Admin/EditFood'

export function AdminRoutes() {
    return(
        <Routes>
            <Route path='/' element={<HomeAdmin/>}/>
            <Route path='/foodAdmin' element={<FoodAdmin/>}/>
            <Route path='/newFood' element={<NewFood/>}/>
            <Route path='/edit' element={<EditFood/>}/>
        </Routes>
    )
}