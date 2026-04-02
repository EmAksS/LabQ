import { Outlet } from "react-router-dom";
import Header from "../../../ui/layout/header/Header";
import { Sidebar } from "../../../ui/layout/sidebar/Sidebar";

import './DashboardLayout.scss';

export default function DashboardLayout (){
     return (
     <div className="main">
        <Header />

        <div className="mainLayout">
            <Sidebar />
            <main className="content">
                <Outlet />
            </main>
        </div>
    </div>
)}