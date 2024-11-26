import React from 'react'

function ExperienceSection() {
    return (
        <div className="my-4 lg:my-8 py-8 lg:py-16">
            <div className={'w-full pb-12 flex flex-row items-center'}>
                <div className="w-fit p-1 px-2 rounded bg-[rgba(255,255,255,0.1)] backdrop-blur-sm">
                    <h1 className={'text-2xl font-mono'}>EXPERIENCE</h1>
                </div>
                <span className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-purple-400 "></span>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                <div></div>
                <div className={'col-span-2 flex flex-col gap-8 '}>
                    <div
                        className={'backdrop-blur-sm bg-[rgba(255,255,255,0.1)] rounded border border-solid border-gray-800 p-6'}>
                        <div className="flex justify-between flex-col lg:flex-row items-center ">
                            <h3 className={'text-4xl font-bold'}>LexMeet</h3>
                            <h3 className={'text-cyan-400 text-center font-mono'}>Full Stack Developer Intern</h3>
                        </div>
                        <div className={'pb-4 pt-1.5 text-sm text-center lg:text-start'}>
                            <p>March - July, 2024</p>
                        </div>
                        <div className={'px-6'}>
                        <ul className={'list-disc flex flex-col gap-3'}>
                                <li>
                                    <p>Manage local and production deployment with Gitlab while also handling tasks and
                                        manpower management.</p>
                                </li>
                                <li>
                                    <p>From designing to frontend coding using Figma and React, creating effective and
                                        optimize user interaction and performant operation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className={'backdrop-blur-sm bg-[rgba(255,255,255,0.1)] rounded border border-solid border-gray-800 p-6'}>
                        <div className="flex justify-between flex-col lg:flex-row items-center ">
                            <h3 className={'text-4xl font-bold'}>Freelance</h3>
                            <h3 className={'text-cyan-400 text-center font-mono'}>Full Stack Developer</h3>
                        </div>
                        <div className={'pb-4 pt-1.5 text-sm text-center lg:text-start'}>
                            <p>Present</p>
                        </div>
                        <div className={'px-6'}>
                            <ul className={'list-disc flex flex-col gap-3'}>
                                <li>
                                    <p>Paid and Hobby project development.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection
