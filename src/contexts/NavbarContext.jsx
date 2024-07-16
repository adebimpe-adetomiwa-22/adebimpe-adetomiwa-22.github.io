import { createContext, useState } from 'react';

export const NavbarContext = createContext(null);

const NavbarContextProvider = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);

    const value = {
        showNavbar,
        setShowNavbar,
        aboutActive,
        setAboutActive,
    };

    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    );
};

export default NavbarContextProvider;
