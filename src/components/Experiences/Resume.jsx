// src/components/Resume.js
import React from "react";

export default function Resume() {
    return (
        <div className="w-full flex flex-col items-center space-y-4">
            {/* Inline PDF Preview */}


            {/* Always-Visible Download Button */}
            <button
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition"
            >
                Download Resume
            </button>
        </div>
    );
}
