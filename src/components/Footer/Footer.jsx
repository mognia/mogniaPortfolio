import React from 'react';
import {FaGithub, FaLinkedin, FaGlobe, FaMedium, FaDev, FaTelegram} from 'react-icons/fa';
import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles['footer-container']}>
            <div className={styles["left-align"]}>
                <p>
                    Developed & Designed with <span className={styles["blue-heart"]}>❤️</span> by
                    <a href="https://linkedin.com/in/morten-ghafarnia" target="_blank" rel="noopener noreferrer" className={styles["footer-link"]}>Me</a>.
                </p>
            </div>
            <div className={styles["center-align"]}>
                <p>&copy; Morten Ghafarnia 2025</p>
            </div>
            <div className={`${styles['right-align']} ${styles['social-icons']}`}>
                <a href="https://github.com/mognia" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/morten-ghafarnia" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://mognia.dev" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                <a href="https://t.me/mognia" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
            </div>
        </footer>
    );
};

export default Footer;
