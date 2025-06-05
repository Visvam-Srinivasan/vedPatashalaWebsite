import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/header/Header";
import Login from "./components/login/Login";
import Login2 from "./components/login/Login2";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header></Header>
            <section className="bg-amber-50">
            <Routes>
                <Route path="/" element={<Login2 />} />
            </Routes>
            </section>
        </>
    )
}    

export default App;
