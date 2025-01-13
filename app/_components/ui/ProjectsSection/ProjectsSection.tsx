"use client";
import React from 'react'
import GlassCard from "@/app/_components/ui/ProjectsSection/GlassCard";
import {ProjectList} from "@/app/data/ProjectList";
import {motion} from "framer-motion";

function ProjectsSection() {

  return (<div className="relative my-4 lg:my-8 py-8 lg:py-16 ">
    <div className={' w-full pb-12 flex flex-row items-center'}>
      <span className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-purple-400 "></span>
      <div className="relative w-fit p-1 px-2 rounded bg-[rgba(255,255,255,0.1)] backdrop-blur-sm">
        <h1 className={'text-2xl font-mono'}>PROJECTS</h1>
        <div
            className="w-[120px] h-[120px] bg-violet-600 rounded-full absolute -top-8 filter blur-3xl opacity-20 -z-10"></div>
      </div>
    </div>
    <div className={'w-full grid align-center items-center justify-center'}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        {ProjectList.map((project, index) => {
          return (<motion.div key={index}
                              initial={{opacity: 0}}
                              whileInView={{opacity: 1}}
                              viewport={{once: true}}
                              transition={{duration: 0.3, delay: index * 0.150}}>
            <GlassCard  {...project}/>
          </motion.div>)
        })}
      </div>
    </div>

  </div>)
}

export default ProjectsSection
