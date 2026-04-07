import {Routes, Route, Navigate} from "react-router-dom";
import { ProtectedRoute } from "../components/containers/routes/ProtectedRoute";
import { PublicRoute } from "../components/containers/routes/PublicRoute";
import DashboardLayout from "../components/containers/layout/dashboardLayout/DashboardLayout";
import MainPage from "../pages/dashboard/main/MainPage";
import QueuePage from "../pages/dashboard/queue/QueuePage";
import CreatePage from "../pages/dashboard/create/CreatePage";

import URLS from "../../constants/urls";
import { AuthPage } from "../pages/auth/AuthPage";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute/>}>
        <Route path={URLS.AUTH} element={<AuthPage />} />
      </Route>
      
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path={URLS.MAIN} element={<MainPage />}/>
          <Route path={URLS.QUEUES} element={<QueuePage/>}/>
          <Route path={URLS.CREATE} element={<CreatePage/>}/>
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={URLS.AUTH} replace />} />
    </Routes>
  );
}