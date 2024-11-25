'use client'
import React, {useRef} from 'react'
import {motion} from "framer-motion";


function EducationSection() {

    const constraintsRef = useRef(null);

    return (<div className=" my-8 lg:my-16 py-8 lg:py-16">
        <div className="relative flex flex-shrink-0 items-center justify-center py-6">
            <div
                className="w-[120px] h-[120px] bg-violet-600 rounded-full absolute filter blur-3xl  opacity-20"></div>
            <span className="h-0.5 w-[64px] bg-gradient-to-r from-cyan-400 to-purple-400 "></span>
            <h2 className={'text-2xl lg:text-4xl font-mono px-1.5'}>
                <span className={'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'}>E</span>
                ducation
            </h2>
            <span className="h-0.5 w-[64px] bg-gradient-to-r from-cyan-400 to-purple-400 "></span>
        </div>
        <motion.div
            className={'relative w-full h-[450px] rounded bg-[rgba(255,255,255,0.03)] flex justify-center items-center'}
                        ref={constraintsRef}>
                <motion.div drag dragConstraints={constraintsRef} dragTransition={{bounceStiffness: 300, bounceDamping: 12}}
                            className="absolute w-auto h-auto rounded p-6 bg-[rgba(255,255,255,0.10)]">
                    <div className={'text-white'}>
                        <h2 className={'text-xl lg:text-3xl text-cyan-400 font-bold '}>Polytechnic University of the Philippines</h2>
                        <p className={'font-mono text-base lg:text-xl pb-4'}>Manila, Philippines</p>
                        <p className={' text-base lg:text-xl '}>
                            <span className={'font-black'}>Degree: </span>
                            Bachelor of Science in Information Technology</p>
                        <p className={' text-base lg:text-xl'}>
                            <span className={'font-black'}>GPA: </span>
                            1.3</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>)
}

export default EducationSection
