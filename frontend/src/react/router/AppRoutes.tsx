import {Routes, Route, Navigate} from "react-router-dom";
import Three from "../pages/Three";
import Two from "../pages/Two";
import One from "../pages/One";
import { ProtectedRoute } from "../components/containers/routes/ProtectedRoute";
import { PublicRoute } from "../components/containers/routes/PublicRoute";
import { LoginPage } from "../pages/login/LoginPage";
import { RegisterPage } from "../pages/register/RegisterPage";



export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute/>}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<One />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}