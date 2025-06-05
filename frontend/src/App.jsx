import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './global.css';
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Home from "./components/Home";
import AdminNavbar from "./components/users/admin/AdminNavbar";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminNavbar />} />
            </Routes>
        </>
    )
}    

export default App;
