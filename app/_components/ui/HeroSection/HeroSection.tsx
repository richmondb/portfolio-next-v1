"use client"
import React, {useEffect, useState} from 'react'
import style from "./fancy-button.module.scss"
import {motion} from 'framer-motion'
import {IoIosClose} from "react-icons/io";
import Image from "next/image";


function HeroSection() {

    const Me = ["Web Developer.", "Software Developer.", "Data analysts.", "Data scientists."];

    return (<section
            className="h-auto lg:max-h-[800px] min-h-[800px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-16 text-white items-center">

            <div className={'order-2 lg:order-1'}>
                <div className={'items-center justify-center'}>
                    <h1 className={'text-white font-black  text-4xl lg:text-6xl'}>Hi!,</h1>
                    <h1 className={'text-white font-black  text-5xl  lg:text-7xl py-3'}> I&#39;m <span
                        className={'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'}>Richmond</span>
                    </h1>
                    <div>
                        <h1 className={'text-4xl lg:text-5xl py-3 inline-block text-pre'}>Aspiring&nbsp;</h1>
                        <Typewrite examples={Me}/>
                    </div>
                    <div className={'py-6 pr-8 text-pretty text-base lg:text-lg'}>
                        <h1>Recent IT graduate with a strong foundation in web development and data
                            science. Skilled in leveraging NextJS, Laravel, and Django to build robust and scalable
                            applications. Experienced in applying machine learning techniques to real-world problems, as
                            demonstrated in my college capstone project.</h1>
                    </div>
                    <MyButton/>
                </div>
            </div>
            <div className={'relative order-1 lg:order-2'}>
                <div className={'h-fit bg-[rgba(9,10,17,1)] shadow-[0_0px_70px_-40px_rgba(255,255,255,0.3)]'}>
                    <div className={'flex items-center gap-2 p-3 w-fit bg-gray-600'}>
                        <Image src={"/svg/javascript.svg"} alt="javascript svg" width={16} height={16}/>
                        <p className={'text-sm roboto-bold'}>about-me.js</p>
                        <IoIosClose/>
                    </div>
                    <hr/>
                    <div className={'p-6'}>
                        <code className="font-mono text-xs md:text-sm lg:text-base">
                            <div>
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">coder</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-amber-300">Richmond B.</span>
                                <span className="text-gray-400">{`',`}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">skills:</span>
                                <span className="text-gray-400">{' {'}</span>
                                <br/>
                                <div>
                                    <span className="ml-4 lg:ml-8 text-white">frontend: </span>
                                    <span className="text-gray-400">{`[`}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">React</span>
                                    <span className="text-gray-400">{"',"}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">NextJS</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-gray-400">{"],"}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 text-white">backend: </span>
                                    <span className="text-gray-400">{`[`}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">Express.js</span>
                                    <span className="text-gray-400">{"',"}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">Laravel</span>
                                    <span className="text-gray-400">{"',"}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">Django</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-gray-400">{"],"}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 text-white">database: </span>
                                    <span className="text-gray-400">{`[`}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">MySQL</span>
                                    <span className="text-gray-400">{"',"}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">Postgresql</span>
                                    <span className="text-gray-400">{"',"}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">MongoDB</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-gray-400">{"],"}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 text-white">devops: </span>
                                    <span className="text-gray-400">{`[`}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">Docker</span>
                                    <span className="text-gray-400">{"',"}</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-amber-300">Azure</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-gray-400">{"]"}</span>
                                </div>
                                <div><span className="text-gray-400">{`},`}</span></div>
                            </div>

                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                                <span className="text-orange-400">function</span>
                                <span className="text-gray-400">{'() {'}</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                                <span className="text-gray-400">{`(`}</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                <span className="mr-2 text-white">hardWorker</span>
                                <span className="text-amber-300">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                <span className="mr-2 text-white">problemSolver</span>
                                <span className="text-amber-300">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                <span className="mr-2 text-white">skills.length</span>
                                <span className="mr-2 text-amber-300">&gt;=</span>
                                <span className="text-orange-400">6</span>
                            </div>
                            <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                            <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                            <div><span className="text-gray-400">{`};`}</span></div>
                        </code>

                    </div>

                </div>
            </div>
        </section>)
}

const MyButton = () => {

    return (
        <>
            <a className={style.fancy} target={'_blank'} href={'https://drive.google.com/file/d/1cGA81gxA1K34u6z79lDJzIWtSKQcmrS4/view?usp=sharing'}>
                <span className={style.top_key}></span>
                <span className={style.text}>Download Resume</span>
                <span className={style.bottom_key_1}></span>
                <span className={style.bottom_key_2}></span>
            </a>
        </>
    )
}


const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({examples}: { examples: string[] }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setExampleIndex((pv) => (pv + 1) % examples.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, [examples.length]);

    return (<p className="inline-block ">
            <span className="text-4xl md:text-5xl">
                {examples[exampleIndex].split("").map((l, i) => (<motion.span
                        initial={{
                            opacity: 1,
                        }}
                        animate={{
                            opacity: 0,
                        }}
                        transition={{
                            delay: FADE_DELAY, duration: MAIN_FADE_DURATION, ease: "easeInOut",
                        }}
                        key={`${exampleIndex}-${i}`}
                        className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                    >
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: i * LETTER_DELAY, duration: 0,
                            }}
                        >
                            {l}
                        </motion.span>
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                times: [0, 0.1, 1],
                                duration: BOX_FADE_DURATION,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-gradient-to-r from-cyan-400 to-purple-400"
                        />
                    </motion.span>))}
      </span>
        </p>);
};

export default HeroSection
