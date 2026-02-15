import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes, FaGithub, FaRocket } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const getNavLinkClass = ({ isActive }) =>
        `${styles['nav-link']} ${isActive ? styles['nav-link-active'] : ''}`;

    const handleScrollNavigation = (e , target) => {
        e.preventDefault();

        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTarget: target } });
            setIsOpen(false);
            return;
        }

        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        setIsOpen(false);
    };

    return (
        <header className={styles['header-container']}>
            <Link to="/" className={styles.logo} onClick={(e) => handleScrollNavigation(e, 'home')}>
                Mognia
            </Link>
            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={30} className={styles['close-icon']} /> : <FaBars size={30} />}
            </div>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <NavLink to="/" end className={getNavLinkClass} onClick={(e) => handleScrollNavigation(e, 'home')}>
                    <FaHome />
                    Home
                </NavLink>
                <Link to="/" className={styles['nav-link']} onClick={(e) => handleScrollNavigation(e, 'about')}>
                    <FaUser />
                    About
                </Link>
                <NavLink
                    to="/projects"
                    className={getNavLinkClass}
                    onClick={() => setIsOpen(false)}
                >
                    <FaCode />
                    Projects
                </NavLink>
                <NavLink
                    to="/offer"
                    className={getNavLinkClass}
                    onClick={() => setIsOpen(false)}
                >
                    <FaRocket />
                    Offer
                </NavLink>
                <a href="#resume"  className={styles['nav-link']}   onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/cv.pdf';
                    link.download = 'Morten_Ghafarnia_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}>
                    <FaFileAlt />
                    Resume
                </a>
                <button
                    onClick={()=> {
                        setIsOpen(false)
                        window.open("https://github.com/mognia", "_blank")
                    }}
                    className={styles.button}
                    rel="noopener noreferrer"

                >
                    Check My
                    {`\u00A0`}
                    <FaGithub />
                </button>
            </nav>
        </header>
    );
};

export default Header;
