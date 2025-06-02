import React from 'react';
import '../../tailwind.css';

function Navbar() {
    return (
        <>
        <nav className="h-20  p-4
            bg-gradient-to-r from-orange-600 via-orange-300 to-orange-600
            hover:from-red-500 hover:via-orange-600 hover:to-red-500 
            text-indigo-900 hover:text-white
            transition duration-300">
            <div className="mx-auto">
                <h1 className="text-center text-5xl font-cinzel font-medium">
                    VED PATASHALA
                </h1>
            </div>
        </nav>
        </>
    )

}
export default Navbar;
