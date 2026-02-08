import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Experiences from "../components/Experiences/Experiences.jsx";
import SocialLinks from "../components/SocialLinks/SocialLinks.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const target = location.state?.scrollTarget;
        if (!target) return;

        const timeoutId = window.setTimeout(() => {
            const section = document.getElementById(target);
            section?.scrollIntoView({ behavior: "smooth" });
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, [location.key, location.state]);

    return (
        <>
            <div id="home">
                <Hero />
            </div>
            <About />
            <Experiences />
            <SocialLinks />
            <Footer />
        </>
    );
};

export default HomePage;
