showNavbar
    ? 'nav fixed z-20 right-0 top-0 overflow-hidden transition-all duration-300 w-full h-full translate-x-0 bg-slate-50 text-slate-500 md:translate-x-0 md:static md:bg-transparent md:text-slate-50 md:w-auto md:h-auto md:bg-red-200'
    : 'nav fixed z-20 right-0 top-10 overflow-hidden duration-300 transition-all w-1/2 h-full translate-x-full bg-slate-50 text-slate-500 md:translate-x-0 md:static md:bg-transparent md:text-slate-50 md:w-auto md:h-auto md:bg-red-200';

const Navbar = () => {
    const { showNavbar, setShowNavbar } = useContext(NavbarContext);

    const hideNav = (event) => {
        setShowNavbar(false);
    };
    return (
        <nav
            className={
                showNavbar
                    ? 'nav fixed z-20 right-0 top-0 overflow-hidden transition-all duration-300 w-full h-full translate-x-0 bg-slate-50 text-slate-500 md:translate-x-0 md:static md:bg-transparent md:text-slate-50 md:w-auto md:h-auto md:bg-red-200'
                    : 'nav fixed z-20 right-0 top-10 overflow-hidden duration-300 transition-all w-1/2 h-full translate-x-full bg-slate-50 text-slate-500 md:translate-x-0 md:static md:bg-transparent md:text-slate-50 md:w-auto md:h-auto md:bg-red-200'
            }
        >
            <div className="container h-full">
                <ul className="relative w-full h-full flex flex-col justify-center items-center gap-3 md:flex-row">
                    <li
                        className="absolute right-1 top-1 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer md:hidden"
                        onClick={hideNav}
                    >
                        <i className="fas fa-xmark text-lg font-bold"></i>
                    </li>
                    <li>
                        <a className="tramsition-all hover: text-slate-900 cursor-pointer font-semibold opacity-55 hover:opacity-90 tracking-widest">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="tramsition-all hover: text-slate-900 cursor-pointer font-semibold opacity-55 hover:opacity-90 tracking-widest">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="tramsition-all hover: text-slate-900 cursor-pointer font-semibold opacity-55 hover:opacity-90 tracking-widest">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="tramsition-all hover: text-slate-900 cursor-pointer font-semibold opacity-55 hover:opacity-90 tracking-widest">
                            Resume / CV
                        </a>
                    </li>
                    <li>
                        <a className="tramsition-all hover: text-slate-900 cursor-pointer font-semibold opacity-55 hover:opacity-90 tracking-widest">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
