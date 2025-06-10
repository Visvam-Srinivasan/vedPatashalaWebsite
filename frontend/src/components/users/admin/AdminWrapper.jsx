import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import './stylesheets/adminWrapper.css';

import AdminNavbar from "./AdminNavbar";
import AdminDashboard from "./AdminDashboard";

function AdminWrapper() {

    return (
        <>
        <div className="admin-layout">
            <AdminNavbar />
            <div className="admin-content">
                <Outlet />
            </div>
        </div>
        </>
    )

}

export default AdminWrapper;