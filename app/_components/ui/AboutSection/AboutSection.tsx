"use client"

import React, {useRef} from "react";
import Image from "next/image";
import {motion, useInView, useMotionTemplate, useMotionValue, useSpring} from "framer-motion";


function AboutSection() {
    // const [scope_1, animate_1] = useAnimate()
    // const [scope_2, animate_2] = useAnimate()

    const scope_1 = useRef<HTMLDivElement | null>(null);
    const scope_2 = useRef<HTMLDivElement | null>(null);


    const isInView_1 = useInView(scope_1, {once: false})
    const isInView_2 = useInView(scope_2, {once: false})


    return (<>
        <div
            className={'relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-4 lg:my-8 py-8 lg:py-16 items-center overflow-hidden'}>
            <motion.div ref={scope_1}
                        style={{
                            transform: isInView_1 ? "none" : "translateX(-150px)",
                            opacity: isInView_1 ? 1 : 0,
                            transition: "all 750ms cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
                        }}
                        className={'text-sm lg:text-lg text-pretty'}>
                <div className={'pb-6'}>
                    <h1 className={'text-2xl uppercase text-cyan-400'}>About Me</h1>
                    <div className="flex justify-start -translate-y-[1px]">
                        <div className="w-1/2">
                            <div
                                className="h-[1px] bg-gradient-to-r from-violet-500 to-transparent w-full"></div>
                        </div>
                    </div>
                </div>
                <h1>My name is Richmond Billones, during my college years, I had the
                    opportunity to work with a variety of frameworks. Among them, Next.js and Laravel stood out as
                    my favorites. I&#39;m proficient in Python, applying it to various fields including AI, software
                    development,
                    and web development. I&#39;ve built machine learning models, efficient APIs, and desktop/game
                    applications.
                    <br/>
                    <br/>
                    Beyond my technical expertise, I am a quick learner, a dedicated problem-solver. When not
                    immersed in code, I enjoy exploring
                    the world of movies, anime, photography, and reading.
                </h1>
            </motion.div>
            <motion.div ref={scope_2}
                        style={{
                            transform: isInView_2 ? "none" : "translateX(150px)",
                            opacity: isInView_2 ? 1 : 0,
                            transition: "all 750ms cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
                        }}
                        className={'flex justify-center'}>
                <TiltCard/>
            </motion.div>
            <div className={'absolute inset-0 -z-10 overflow-hidden'}>
                <Image src={'/svg/grid.svg'} alt={'grid'} width={1376} height={320}
                       className={'w-full h-full object-cover object-center backdrop-blur opacity-10'}/>
            </div>
        </div>
    </>)
}

const ROTATION_RANGE = 32.5;

const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {

    const ref = useRef<HTMLDivElement | null>(null);


    const x = useMotionValue(0);

    const y = useMotionValue(0);


    const xSpring = useSpring(x);

    const ySpring = useSpring(y);


    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (!ref.current) return [0, 0];


        const rect = ref.current.getBoundingClientRect();


        const width = rect.width;

        const height = rect.height;


        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;

        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;


        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

        const rY = mouseX / width - HALF_ROTATION_RANGE;


        x.set(rX);

        y.set(rY);

    };


    const handleMouseLeave = () => {

        x.set(0);

        y.set(0);

    };

    return (<motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d", transform,
            }}
            className="relative h-80 w-80 rounded-xl  bg-white/5">

            <div
                style={{
                    transform: "translateZ(75px)", transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-transparent shadow-lg">
                <Image src={'/images/avatar.jpg'} alt={'avatar'} quality={100} width={320} height={320}
                       className={'rounded-xl'}/>

            </div>
        </motion.div>

    );

};

export default AboutSection
