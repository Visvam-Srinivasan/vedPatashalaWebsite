import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Login2 from "./components/login/Login2";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <section className="bg-amber-50">
            <Routes>
                <Route path="/" element={<Login2 />} />
            </Routes>
            </section>
        </>
    )
}    

export default App;
