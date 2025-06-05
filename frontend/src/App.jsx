import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login2 from "./components/login/Login2";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Login2 />} />
            </Routes>
        </>
    )
}    

export default App;
