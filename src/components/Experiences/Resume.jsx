// src/components/Resume.js
import React from "react";
import styles from'./Experiences.module.scss'
export default function Resume() {
    return (
        <div className="w-full flex flex-col  items-center space-y-4 md:sticky md:top-0 md:py-5 md:z-10">
            {/* Inline PDF Preview */}

            <div className={styles['resume-holder']}>

            {/* Always-Visible Download Button */}
            <button
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition"
            >
                Download Resume
            </button>
            </div>
        </div>
    );
}
