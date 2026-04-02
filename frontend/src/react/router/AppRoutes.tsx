import {Routes, Route, Navigate} from "react-router-dom";
import { ProtectedRoute } from "../components/containers/routes/ProtectedRoute";
import { PublicRoute } from "../components/containers/routes/PublicRoute";
import { LoginPage } from "../pages/auth/login/LoginPage";
import { RegisterPage } from "../pages/auth/register/RegisterPage";
import DashboardLayout from "../components/containers/layout/dashboardLayout/DashboardLayout";
import MainPage from "../pages/dashboard/main/MainPage";
import QueuePage from "../pages/dashboard/queue/QueuePage";
import CreatePage from "../pages/dashboard/create/CreatePage";



export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute/>}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<MainPage />}/>
          <Route path="/queues" element={<QueuePage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}