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
                Mognia
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
