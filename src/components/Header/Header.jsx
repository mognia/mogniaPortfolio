import React, { useState } from 'react';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes, FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e , target) => {
        e.preventDefault();
        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header className={styles['header-container']}>
            <a href="#home" className={styles.logo} onClick={(e) => handleClick(e, 'home')}>
                TJ KLINT
            </a>
            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={30} className={styles['close-icon']} /> : <FaBars size={30} />}
            </div>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <a href="#home" className={styles['nav-link']} onClick={(e) => handleClick(e, 'home')}>
                    <FaHome />
                    Home
                </a>
                <a href="#about"  className={styles['nav-link']} onClick={(e) => handleClick(e, 'about')}>
                    <FaUser />
                    About
                </a>
                <a href="#projects"  className={styles['nav-link']} onClick={(e) => handleClick(e, 'projects')}>
                    <FaCode />
                    Projects
                </a>
                <a href="#resume"  className={styles['nav-link']} onClick={(e) => handleClick(e, 'resume')}>
                    <FaFileAlt />
                    Resume
                </a>
                <a
                    className={styles.button}
                    href="https://github.com/tjklint/tjklint.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                >
                    <FaStar />
                    {`or\u00A0`}
                    <FaCodeBranch />
                </a>
            </nav>
        </header>
    );
};

export default Header;
