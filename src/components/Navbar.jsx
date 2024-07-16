import React, { useContext } from 'react';
import { NavbarContext } from '../contexts/NavbarContext';

const Navbar = () => {
    const { showNavbar, setShowNavbar } = useContext(NavbarContext);

    return (
        <nav className={showNavbar ? 'nav active' : 'nav md:active not-active'}>
            <ul>
                <li
                    className="hide-nav"
                    onClick={(event) => setShowNavbar(false)}
                >
                    <a href="#">
                        <i className="fas fa-xmark text-lg"></i>
                    </a>
                </li>
                <li>
                    <a href="#home" onClick={(event) => setShowNavbar(false)}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={(event) => setShowNavbar(false)}>
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        onClick={(event) => setShowNavbar(false)}
                    >
                        Projects
                    </a>
                </li>
                {/* <li>
                    <a href="#">Resume / CV</a>
                </li> */}
                <li>
                    <a
                        href="#contact"
                        onClick={(event) => setShowNavbar(false)}
                    >
                        Contact Me
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
