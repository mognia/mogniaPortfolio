import React, { useState, useEffect, useRef, useMemo } from 'react';
// Removed styled-components import

// A placeholder for your spaceship image source
import spaceship from '../../assets/spaceship/webp/spaceship.webp'

// --- CONSTANTS ---
// Centralizing magic numbers and static data for easier maintenance.
const TYPEWRITER_TEXTS = [
    "Software Developer",
    "Frontend Developer",
    "Full-Sack Developer",
    "AI Enthusiast",
    "Coffee Drinker",
];

const TOP_LINES = [

    "Welcome to my corner of the web!",
    "Greetings! I'm thrilled to have you here.",
    "Hi! Thanks for dropping by.",
    "Say hello to my little projects!",
    "Welcome to the dark side of my portfolio.",
];

const TYPEWRITER_OPTIONS = {
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
};

const CIRCLE_ANIMATION_CONFIG = {
    generationInterval: 333,
    circlesPerInterval: 7,
    animationDuration: 2000, // This must match the CSS animation duration
};


// --- CUSTOM HOOKS (Logic remains the same, only styling is moved) ---

/**
 * A hook to manage the typewriter effect.
 * @param {string[]} texts - An array of strings to type.
 * @param {object} options - Configuration for speeds and delays.
 * @returns {string} The current text to display.
 */
const useTypewriter = (texts, { typingSpeed, deletingSpeed, pauseDuration }) => {
    const [text, setText] = useState('');
    const textIndex = useRef(0);
    const charIndex = useRef(0);
    const isDeleting = useRef(false);

    useEffect(() => {
        if (!texts || texts.length === 0) return;

        let timeoutId;

        const handleTyping = () => {
            const currentString = texts[textIndex.current];

            if (isDeleting.current) {
                // Handle deleting
                setText(currentString.substring(0, charIndex.current) + '_');
                charIndex.current -= 1;

                if (charIndex.current < 0) {
                    isDeleting.current = false;
                    textIndex.current = (textIndex.current + 1) % texts.length;
                }
            } else {
                // Handle typing
                setText(currentString.substring(0, charIndex.current + 1) + '_');
                charIndex.current += 1;

                if (charIndex.current === currentString.length) {
                    isDeleting.current = true;
                    // Pause before deleting
                    timeoutId = setTimeout(handleTyping, pauseDuration);
                    return;
                }
            }

            const nextTimeout = isDeleting.current ? deletingSpeed : typingSpeed;
            timeoutId = setTimeout(handleTyping, nextTimeout);
        };

        timeoutId = setTimeout(handleTyping, typingSpeed);

        // Cleanup: This is crucial to prevent memory leaks and errors when the component unmounts.
        return () => clearTimeout(timeoutId);

    }, [texts, typingSpeed, deletingSpeed, pauseDuration]);

    return text;
};

/**
 * A hook to generate and manage animated circles.
 * @param {React.RefObject<HTMLElement>} containerRef - Ref to the container for dimensions.
 * @returns {object[]} An array of circle objects to render.
 */
const useCircleAnimation = (containerRef) => {
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        const { generationInterval, circlesPerInterval, animationDuration } = CIRCLE_ANIMATION_CONFIG;

        const intervalId = setInterval(() => {
            if (!containerRef.current) return;

            const { clientWidth, clientHeight } = containerRef.current;
            const centerX = clientWidth / 2;
            const centerY = clientHeight / 2;

            const newCircles = Array.from({ length: circlesPerInterval }).map(() => {
                const isVerticalEdge = Math.random() > 0.5;
                const size = Math.random() * 20 + 10;
                const left = isVerticalEdge
                    ? (Math.random() > 0.5 ? 0 : clientWidth - size)
                    : Math.random() * clientWidth;
                const top = !isVerticalEdge
                    ? (Math.random() > 0.5 ? 0 : clientHeight - size)
                    : Math.random() * clientHeight;

                return {
                    id: Math.random(),
                    left,
                    top,
                    size,
                    targetX: centerX - left,
                    targetY: centerY - top,
                };
            });

            setCircles(prev => [...prev, ...newCircles]);

            // Cleanup: Remove circles after the animation duration
            setTimeout(() => {
                setCircles(prev => prev.slice(newCircles.length));
            }, animationDuration);

        }, generationInterval);

        // Cleanup: Clear the interval when the component unmounts.
        return () => clearInterval(intervalId);

    }, [containerRef]);

    return circles;
};

// --- CSS STYLES AND ANIMATIONS (Moved from styled-components to a standard <style> block) ---
const CustomStyles = () => (
    <style>
        {`
            /* Apply general font and ensure smooth scrolling */
            body { font-family: 'RobotoMono', sans-serif; }

            /* Keyframes for the Spaceship Float Animation */
            @keyframes floatAnimation {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .spaceship-float { animation: floatAnimation 3s ease-in-out infinite; }

            /* Keyframes for the Circle Shrink and Move Animation */
            @keyframes shrinkAndMove {
                from {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                }
                to {
                    /* Use custom properties set via React style prop */
                    transform: translate(var(--tx, 0px), var(--ty, 0px)) scale(0);
                    opacity: 0;
                }
            }
            .circle-animate {
                animation: shrinkAndMove ${CIRCLE_ANIMATION_CONFIG.animationDuration}ms linear forwards;
            }

            /* Custom Gradient Text Styling */
            .gradient-text {
                background: linear-gradient(80deg, #1c7287, #27beb3);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        `}
    </style>
);


// --- MAIN COMPONENT ---
const Hero = () => {
    const rightContainerRef = useRef(null);

    // Using useMemo for static arrays.
    const memoizedTopLines = useMemo(() => TOP_LINES, []);
    const memoizedTypewriterTexts = useMemo(() => TYPEWRITER_TEXTS, []);

    // State derived from custom hooks.
    const [topLine] = useState(() => memoizedTopLines[Math.floor(Math.random() * memoizedTopLines.length)]);
    const currentText = useTypewriter(memoizedTypewriterTexts, TYPEWRITER_OPTIONS);
    const circles = useCircleAnimation(rightContainerRef);

    return (
        <>
            <CustomStyles />
            {/* HeroContainer equivalent with Tailwind */}
            <section className="flex flex-col min-h-screen bg-[#1e1e1e] text-white overflow-hidden font-sans md:flex-row">

                {/* LeftContainer equivalent with Tailwind */}
                <div className="flex flex-col justify-center p-10 text-left w-full md:w-[35%] transition-transform -translate-y-[10%] md:translate-y-0 text-center md:text-left">
                    <h1 className="text-xl md:text-2xl">{topLine}</h1>

                    {/* GradientText equivalent with Tailwind and custom class */}
                    <h2 className="gradient-text font-bold my-2" style={{fontSize: "clamp(2.5em, 8vw, 4em)"}}>I'm Mognia.</h2>

                    {/* TypewriterText equivalent with Tailwind */}
                    <div className="text-[#27beb3] whitespace-nowrap overflow-hidden" style={{fontSize: "clamp(1.2em, 4vw, 1.5em)", minHeight: "1.2em"}}>
                        {currentText || '_'}
                    </div>
                </div>

                {/* RightContainer equivalent with Tailwind */}
                <div
                    ref={rightContainerRef}
                    className="relative flex justify-center items-center overflow-hidden min-h-[50vh] w-full md:w-[65%]"
                >
                    {/* Spaceship equivalent with Tailwind and custom animation class */}
                    <img
                        src={spaceship ? spaceship :null}
                        alt="Floating cartoon spaceship"
                        className="w-[80%] max-w-[400px] z-10 spaceship-float md:w-1/2 md:max-w-[500px]"
                    />

                    {/* Dynamic Circles */}
                    {circles.map(circle => (
                        <div
                            key={circle.id}
                            className="absolute bg-white rounded-full circle-animate"
                            style={{
                                width: `${circle.size}px`,
                                height: `${circle.size}px`,
                                left: `${circle.left}px`,
                                top: `${circle.top}px`,
                                // Set CSS variables for the shrinkAndMove keyframes
                                '--tx': `${circle.targetX}px`,
                                '--ty': `${circle.targetY}px`,
                            }}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Hero;
