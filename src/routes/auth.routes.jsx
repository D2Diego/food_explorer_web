import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/Login/SignIn";
import { SignUp } from "../pages/Login/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
