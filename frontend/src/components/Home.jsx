import React from 'react';
import logo from "../assets/navbar/logo.png";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div>
            <img
                src= {logo}
                alt="Logo"
            />
            <h1>HOME PAGE</h1>
            <li>
                <ul><Link to='/admin'>ADMIN</Link></ul>
                <ul><Link to='/guru'>GURU</Link></ul>
                <ul><Link to='/student'>STUDENT</Link></ul>
            </li>
        </div>
        </>
    )

}
export default Home;
