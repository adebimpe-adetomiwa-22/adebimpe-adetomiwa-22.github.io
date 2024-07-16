import React, { useContext, useRef, useState } from 'react';
import Navbar from './Navbar';
import { NavbarContext } from '../contexts/NavbarContext';

const Header = () => {
    const { showNavbar, setShowNavbar } = useContext(NavbarContext);

    const handleNav = (event) => {
        setShowNavbar(true);
    };
    return (
        <header className="header bg-slate-900 text-slate-50">
            <div className="container flex items-center justify-between">
                {/* <div className="title w-16 h-16 bg-slate-50 text-slate-900 flex justify-center items-center rounded-full"> */}
                <div>
                    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                        AA
                    </h2>
                </div>
                <div
                    className="hamburger-menu flex justify-center items-center cursor-pointer text-lg transition opacity-90 hover:opacity-100 relative md:hidden"
                    onClick={handleNav}
                >
                    {/* <i className="fas fa-bars"></i> */}
                    <i className="fas fa-bars-staggered"></i>
                </div>

                <Navbar />
            </div>
        </header>
    );
};

export default Header;
