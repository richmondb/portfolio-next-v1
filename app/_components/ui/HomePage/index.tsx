import React from 'react'

// import javascript_img from "../../../public/svg/javascript.svg";
import {IoIosClose} from "react-icons/io";
import "./index.scss";

function HeroSection() {
    return (
        <section className="h-[75vh] max-h-[600px] min-h-[600px] grid grid-cols-1 lg:grid-cols-2 py-12 text-white">
            <div className={'order-2 lg:order-1'}>
                Hello, I&#39;m
            </div>
            <div className={'relative order-1 lg:order-2'}>
                <div className={'h-fit bg-[rgba(9,10,17,1)] shadow-[0_0px_70px_-40px_rgba(255,255,255,0.3)]'}>
                    <div className={'flex items-center gap-2 p-3 w-fit bg-gray-600'}>
                        <img src={"/svg/javascript.svg"} alt="javascript svg" width={16} height={16}/>
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
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">React</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">NextJS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Laravel</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Django</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">RemixJS</span>
                                <span className="text-gray-400">{"',"}</span>
                                <span className="text-gray-400">{"  '"}</span>
                                <span className="text-amber-300">MySql</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Postgresql</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Docker</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Azure</span>
                                <span className="text-gray-400">{"'],"}</span>
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
        </section>
    )
}

export default HeroSection
