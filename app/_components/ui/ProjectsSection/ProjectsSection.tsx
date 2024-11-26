import React from 'react'
import SpringCards from "@/app/_components/ui/ProjectsSection/SpringCards";
import Image from "next/image";

function ProjectsSection() {

    return (<div className="relativemy-4 lg:my-8 py-8 lg:py-16 ">
        <div className={' w-full pb-12 flex flex-row items-center'}>
            <span className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-purple-400 "></span>
            <div className="relative w-fit p-1 px-2 rounded bg-[rgba(255,255,255,0.1)] backdrop-blur-sm">
                <h1 className={'text-2xl font-mono'}>PROJECTS</h1>
                <div
                    className="w-[120px] h-[120px] bg-violet-600 rounded-full absolute -top-8 filter blur-3xl opacity-20 -z-10"></div>
            </div>
        </div>
        <div className={'w-full grid align-center items-center justify-center'}>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                <SpringCards key={'card-1'} container_classname={'md:mt-8 h-full w-full'} card_color={'bg-[#6DE7B6]'}>
                    <div className="relative flex flex-col items-center justify-center">
                        <a className={'w-full'} href="https://github.com/richmondb/portfolio-next-v1" target="_blank">
                            <Image src={'/images/portfolio_web.png'} alt={'portfolio website'} width={420} height={420} className={'w-full h-[190px] rounded object-center object-cover'} />
                        </a>

                    </div>
                    <div className="pt-2 text-center text-white">
                        <p className="flex items-center justify-center  text-lg lg:text-xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            Portfolio Website
                        </p>
                        <div>
                            <p className="flex items-center text-gray-300 text-base font-medium ">
                                My portfolio website, created using NextJS and Framer motion.
                            </p>
                            <p className="flex justify-center items-center  text-xl font-medium uppercase pt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                Language/Framework

                            </p>
                            <div className="px-4">
                                <ul className="flex justify-center items-center text-gray-300  text-base font-medium gap-3">
                                    <li>
                                        <p className="flex items-center  text-base font-medium ">
                                            Next.js
                                        </p>

                                    </li>
                                    <li>
                                        <p className="flex items-center  text-base font-medium ">
                                            Framer Motion
                                        </p>

                                    </li>
                                    <li>
                                        <p className="flex items-center  text-base font-medium ">
                                            Typescript
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SpringCards>
                <SpringCards key={'card-2'} container_classname={'md:mt-0'} card_color={'bg-[#A4B3FC]'}>
                    <div className="w-full relative flex flex-col items-center justify-center">

                        <a className={'w-full'} href="https://github.com/richmondb/prtech-e-commerce-capstone" target="_blank">
                            <Image src={'/images/capstone_web.png'} alt={'portfolio website'} width={420} height={420}
                                   className={'w-full h-[190px] rounded object-center object-cover'}/>
                        </a>

                    </div>
                    <div className="pt-2 text-center text-white">
                        <p className="flex items-center justify-center  text-lg lg:text-xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            Capstone Website
                        </p>
                        <div>
                            <p className="flex items-center text-gray-300 text-base font-medium ">
                                College capstone Website utilizing machine learning and laravel framework.
                            </p>
                            <p className="flex justify-center items-center  text-xl font-medium uppercase pt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                Language/Framework
                            </p>
                            <div className="px-4">
                                <ul className="flex justify-center items-center text-gray-300  text-base font-medium gap-3">
                                    <li>
                                        <p className="flex items-center  text-base font-medium ">
                                            Laravel (PHP)
                                        </p>

                                    </li>
                                    <li>
                                        <p className="flex items-center  text-base font-medium ">
                                            Python (Api, ML)
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </SpringCards>
                {/*<SpringCards key={'card-3'} container_classname={'md:mt-6'} card_color={'bg-[#A4B3FC]'}>*/}
                {/*    <p>test</p>*/}
                {/*</SpringCards>*/}
                {/*<SpringCards key={'card-4'} container_classname={'md:mt-0'} card_color={'bg-[#6DE7B6]'}>*/}
                {/*    <p>test</p>*/}
                {/*</SpringCards>*/}
            </div>
        </div>

    </div>)
}

export default ProjectsSection
