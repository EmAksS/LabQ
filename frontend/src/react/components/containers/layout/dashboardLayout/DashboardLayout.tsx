import { Outlet } from "react-router-dom";
import Header from "../../../ui/header/Header";
import { Sidebar } from "../../../ui/sidebar/Sidebar";

import './DashboardLayout.scss';

export default function DashboardLayout (){
     return (
     <>
        <Header />

        <div className="mainLayout">
            <Sidebar />
            <main className="content">
                <Outlet />
            </main>
        </div>
    </>
)}