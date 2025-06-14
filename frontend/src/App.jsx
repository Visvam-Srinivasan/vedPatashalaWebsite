import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './global.css';
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Home from "./components/Home";
import AdminNavbar from "./components/users/admin/AdminNavbar";
import AdminDashboard from "./components/users/admin/AdminDashboard";
import AdminWrapper from "./components/users/admin/AdminWrapper";
import AdminManageRoles from "./components/users/admin/AdminManageRoles";
import AdminManageUsers from "./components/users/admin/manageUsers/AdminManageUsers";
import AdminManageCourses from "./components/users/admin/AdminManageCourses";


function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminWrapper />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="manageUsers" element={<AdminManageUsers />} />
                    <Route path="manageRoles" element={<AdminManageRoles />} />
                    <Route path="manageCourses" element={<AdminManageCourses />} />
                </Route>

            </Routes>
        </>
    )
}    

export default App;
