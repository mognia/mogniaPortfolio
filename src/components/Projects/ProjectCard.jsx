import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Projects.module.scss";

const ProjectCard = ({ project, variants }) => {
    const hasLiveDemo = Boolean(project.liveDemoUrl);
    const hasGithub = Boolean(project.githubUrl);

    return (
        <motion.div
            className={styles.projectCard}
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {/* Image Section */}
            <div className={styles.imageContainer}>
                {project.img ? (
                    <img src={project.img} alt={project.title} />
                ) : (
                    <div className={styles.placeholder} />
                )}
            </div>

            {/* Content Section */}
            <div className={styles.content}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.value}</p>

                <div className={styles.techStack}>
                    {project.techTags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>

                {/* New Action Buttons Section */}
                {(hasLiveDemo || hasGithub) && (
                    <div className={styles.projectActions}>
                        {hasLiveDemo && (
                            <a 
                                href={project.liveDemoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                        {hasGithub && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.btnSecondary}
                            >
                                <FaGithub /> GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;