import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './global.css';
import Login from "./components/login/Login";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </>
    )
}    

export default App;
