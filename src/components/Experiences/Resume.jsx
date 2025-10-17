// src/components/Resume.js
import React from "react";
import styles from'./Experiences.module.scss'
export default function Resume() {
    return (
        <div className="w-full flex flex-col  items-center space-y-4 sticky top-0 py-5 z-10">
            {/* Inline PDF Preview */}

            <div className={styles['resume-holder']}>

            {/* Always-Visible Download Button */}
            <button
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/cv.pdf';
                    link.download = 'Morten_Ghafarnia_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition"
            >
                Download Resume
            </button>
            </div>
        </div>
    );
}
