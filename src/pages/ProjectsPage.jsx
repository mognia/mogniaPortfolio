import React from "react";
import { motion } from "framer-motion";
import TitleHeader from "../shared-UI/TitleHeader.jsx";
import projects from "../constants/projects.js";
import styles from "../components/Projects/Projects.module.scss";
import ProjectCard from "../components/Projects/ProjectCard.jsx";
import SocialLinks from "../components/SocialLinks/SocialLinks.jsx";
import Footer from "../components/Footer/Footer.jsx";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const ProjectsPage = () => {
    return (
        <>
            <div className="w-full mt-20 h-full md:px-20 px-5">
                <TitleHeader title="Projects" sub="Shipped Personal products" />
                <div className='flex justify-center w-full items-center'>
                    <p className={styles["projects-page-intro"]}>
                        I build production-ready products with clear rules, measurable output, and real user workflows.
                    </p>
                </div>

                <motion.section
                    className={styles.projects}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className={styles["project-grid"]}
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} variants={fadeInUp} />
                        ))}
                    </motion.div>
                </motion.section>
            </div>
            <SocialLinks />
            <Footer />
        </>
    );
};

export default ProjectsPage;
