import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../../shared-UI/TitleHeader.jsx";
import {expCards} from "../../constants/index.js";
import styles from './Experiences.module.scss'
import Resume from "./Resume.jsx";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    useGSAP(() => {
        // Animate the timeline height as the user scrolls
        // from the top of the timeline to 70% down the screen
        // The timeline height should scale down from 1 to 0
        // as the user scrolls up the screen
        gsap.to(".timeline", {
            // Set the origin of the animation to the bottom of the timeline
            transformOrigin: "bottom bottom",
            // Animate the timeline height over 1 second
            ease: "power1.inOut",
            // Trigger the animation when the timeline is at the top of the screen
            // and end it when the timeline is at 70% down the screen
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                // Update the animation as the user scrolls
                onUpdate: (self) => {
                    // Scale the timeline height as the user scrolls
                    // from 1 to 0 as the user scrolls up the screen
                    gsap.to(".timeline", {
                        scaleY: 1 - self.progress,
                    });
                },
            },
        });

        // Loop through each expText element and animate them in
        // as the user scrolls to each text element
        gsap.utils.toArray(".expText").forEach((text) => {
            // Animate the text opacity from 0 to 1
            // and move it from the left to its final position
            // over 1 second with a power2 ease-in-out curve
            gsap.from(text, {
                // Set the opacity of the text to 0
                opacity: 0,
                // Move the text from the left to its final position
                // (xPercent: 0 means the text is at its final position)
                xPercent: 0,
                // Animate over 1 second
                duration: 1,
                // Use a power2 ease-in-out curve
                ease: "power2.inOut",
                // Trigger the animation when the text is 60% down the screen
                scrollTrigger: {
                    // The text is the trigger element
                    trigger: text,
                    // Trigger the animation when the text is 60% down the screen
                    start: "top 60%",
                },
            });
        }, "<"); // position parameter - insert at the start of the animation
    }, []);

    return (
        <section
            id="experience"
            className="flex-center md:mt-40 mt-20 px-5 md:px-10 md:mt-40 mt-20 xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Professional Work Experience"
                    sub="💼 My Career Overview"
                />
                <div className="mt-32 relative flex">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card) => (
                            <div key={card.title} className=" flex flex-col-reverse xl:flex-row xl:gap-10 gap-2 justify-between">

                                <div className=''>
                                    <div className="flex items-start">
                                        <div className="absolute top-0  md:left-10 left-5 h-9/10 flex justify-center">
                                            <div className="timeline absolute z-30 h-[120%] -top-10 w-14 md:w-28 bg-black" />
                                            <div className={`${styles['gradient-line']} bg-primary w-1 h-full`} />
                                        </div>
                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-black-50 bg-black-100">
                                                <img src={card.logoPath} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-3xl">{card.title}</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️&nbsp;{card.date}
                                                </p>
                                                <p className="text-primary italic">
                                                    Responsibilities
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    {card.responsibilities.map(
                                                        (responsibility, index) => (
                                                            <li key={index} className="text-lg">
                                                                {responsibility}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                        <div className="w-[700px]">
                           <Resume />
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
