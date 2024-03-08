import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { MakeDish } from "../pages/Admin/MakeDish";
import { ChangingPlate } from "../pages/Admin/ChangingPlate";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { ShoppingCart } from "../pages/ShoppingCart";
import { OrdersFood } from "../pages/OrdersFood";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createdish" element={<MakeDish />} />
      <Route path="/editdish/:id" element={<ChangingPlate />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/orders" element={<OrdersFood />} />
    </Routes>
  );
}
