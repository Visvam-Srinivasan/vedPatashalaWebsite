import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <section className="bg-amber-50 pt-10">
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
            </section>
        </>
    )
}    

export default App;
