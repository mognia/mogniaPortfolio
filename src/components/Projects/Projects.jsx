import { motion } from "framer-motion";
import styles from './Projects.module.scss'
import TitleHeader from "../../shared-UI/TitleHeader.jsx";
import {FaGithub} from "react-icons/fa";
import React from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

 const Projects = () => {
     return (
         <div id="projects" className="w-full mt-20 h-full md:px-20 px-5">
             <TitleHeader title="Personal Projects" sub="🚀 My Projects" />

             <motion.section
                 className={styles.projects}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: false }}
                 transition={{ duration: 1 }}
             >
                 <motion.div
                     className={styles["project-grid"]}
                     variants={staggerContainer}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: false }}
                 >
                     {/* === Project Card === */}
                     <motion.div
                         className={styles["project-card"]}
                         variants={fadeInUp}
                         whileHover={{ y: -10, transition: { duration: 0.2 } }}
                     >
                         <motion.div
                             className={styles["project-image"]}
                             style={{
                                 backgroundImage: "url('/projects/mogniaPortfolio.webp')",
                             }}
                             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                         />

                         <h3>Mognia Portfolio</h3>
                         <p>
                             A modern and animated portfolio built with React.js and Vite,
                             using styled components.
                         </p>

                         <div className={styles["project-tech"]}>
                             <span>React.js</span>
                             <span>TailwindCSS</span>
                         </div>

                         {/* ✅ Make links clickable */}
                         <div className={styles["project-links"]}>
                             <motion.a
                                 href="https://github.com/yourusername/mognia-portfolio"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 whileHover={{ scale: 1.2 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={styles.link}
                             >
                                 <FaGithub />
                             </motion.a>

                             <motion.a
                                 href="https://mognia.dev"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={styles.link}
                             >
                                 Live
                             </motion.a>
                         </div>
                     </motion.div>
                     {/* === End Project Card === */}
                 </motion.div>
                 <motion.div
                     className={styles["project-grid"]}
                     variants={staggerContainer}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: false }}
                 >
                     {/* === Project Card === */}
                     <motion.div
                         className={styles["project-card"]}
                         variants={fadeInUp}
                         whileHover={{ y: -10, transition: { duration: 0.2 } }}
                     >
                         <motion.div
                             className={styles["project-image"]}
                             style={{
                                 backgroundImage: "url('/projects/stocks.webp')",
                             }}
                             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                         />

                         <h3>Signalio</h3>
                         <p>
                             Stock Market app built with Next.js, Shadcn, Better Auth. Track prices, set alerts, explore insights, manage watchlists, and automate workflows for notifications and analytics.
                         </p>

                         <div className={styles["project-tech"]}>
                             <span>Next.js</span>
                             <span>Shadcn</span>
                             <span>Better Auth</span>
                         </div>

                         {/* ✅ Make links clickable */}
                         <div className={styles["project-links"]}>
                             <motion.a
                                 href="https://github.com/mognia/stock-app"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 whileHover={{ scale: 1.2 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={styles.link}
                             >
                                 <FaGithub />
                             </motion.a>

                             <motion.a
                                 href="https://stock-app-murex.vercel.app/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={styles.link}
                             >
                                 Live
                             </motion.a>
                         </div>
                     </motion.div>
                     {/* === End Project Card === */}
                 </motion.div>
                 <motion.div
                     className={styles["project-grid"]}
                     variants={staggerContainer}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: false }}
                 >
                     {/* === Project Card === */}
                     <motion.div
                         className={styles["project-card"]}
                         variants={fadeInUp}
                         whileHover={{ y: -10, transition: { duration: 0.2 } }}
                     >
                         <motion.div
                             className={styles["project-image"]}
                             style={{
                                 backgroundImage: "url('/projects/mrello.webp')",
                             }}
                             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                         />

                         <h3>Mrello</h3>
                         <p>
                             Mrello is a full-stack task management tool inspired by Trello.
                             It’s built using Next.js, Supabase, and Clerk, offering a complete real-time drag-and-drop workflow for managing boards, columns, and tasks.                         </p>

                         <div className={styles["project-tech"]}>
                             <span>Next.js</span>
                             <span>Supabase</span>
                             <span>Clerk</span>
                             <span>@dnd-kit</span>
                             <span>TailwindCSS</span>
                         </div>

                         {/* ✅ Make links clickable */}
                         <div className={styles["project-links"]}>
                             <motion.a
                                 href="https://github.com/mognia/mrello"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 whileHover={{ scale: 1.2 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={styles.link}
                             >
                                 <FaGithub />
                             </motion.a>

                             <motion.a
                                 href="https://mrello-i8u5.vercel.app/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={styles.link}
                             >
                                 Live
                             </motion.a>
                         </div>
                     </motion.div>
                     {/* === End Project Card === */}
                 </motion.div>
             </motion.section>
         </div>
    );
};

 export default Projects
