import { motion } from "framer-motion";
import styles from './Projects.module.scss'
import TitleHeader from "../../shared-UI/TitleHeader.jsx";
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
         <div id={'projects'} className="w-full mt-20 h-full md:px-20 px-5">
         <TitleHeader
             title="Professional Work Experience"
             sub="🚀 My Projects"
         />
         <motion.section
             id="projects"
             className={styles['projects']}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: false }}
             transition={{ duration: 1 }}
         >

             <motion.div
                 className={styles['project-grid']}
                 variants={staggerContainer}
                 initial="initial"
                 whileInView="animate"
                 viewport={{ once: false }}
             >
                 <motion.div
                     className={styles['project-card']}
                     variants={fadeInUp}
                     whileHover={{ y: -10, transition: { duration: 0.2 } }}
                 >
                     <motion.div
                         className={styles['project-image']}
                         style={{ backgroundImage: "url('/projects/ai-saas.png')" }}
                         whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                     />
                     <h3>AI SaaS Platform</h3>
                     <p>
                         A modern SaaS platform built with Next.js and OpenAI integration,
                         featuring real-time AI-powered content generation and analytics.
                     </p>
                     <div className={styles['project-tech']}>
                         <span>Next.js</span>
                         <span>OpenAI</span>
                         <span>TailwindCSS</span>
                     </div>
                 </motion.div>

                 <motion.div
                     className={styles['project-card']}
                     variants={fadeInUp}
                     whileHover={{ y: -10, transition: { duration: 0.2 } }}
                 >
                     <motion.div
                         className={styles['project-image']}
                         style={{ backgroundImage: "url('/projects/social-media.png')" }}
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 0.2 }}
                     />
                     <h3>Social Media Dashboard</h3>
                     <p>
                         A comprehensive social media management dashboard with analytics,
                         scheduling, and engagement tracking features.
                     </p>
                     <div className={styles['project-tech']}>
                         <span>React</span>
                         <span>Node.js</span>
                         <span>MongoDB</span>
                     </div>
                 </motion.div>

                 <motion.div
                     className={styles['project-card']}
                     variants={fadeInUp}
                     whileHover={{ y: -10, transition: { duration: 0.2 } }}
                 >
                     <motion.div
                         className={styles['project-image']}
                         style={{ backgroundImage: "url('/projects/stopwatch.png')" }}
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 0.2 }}
                     />
                     <h3>Productivity Timer</h3>
                     <p>
                         A sleek productivity timer application with customizable work sessions,
                         statistics tracking, and dark mode support.
                     </p>
                     <div className={styles['project-tech']}>
                         <span>React</span>
                         <span>TypeScript</span>
                         <span>TailwindCSS</span>
                     </div>
                 </motion.div>
             </motion.div>
         </motion.section>
         </div>
    );
};

 export default Projects
