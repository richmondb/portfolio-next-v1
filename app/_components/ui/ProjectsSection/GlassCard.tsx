import React from 'react'
import styles from "./glass-card.module.scss"
import Image from "next/image";
import {projectType} from "@/app/types";
import {FaGithub} from "react-icons/fa";

function GlassCard(props: projectType) {
  return (<div className={`${styles.glassCard}`}>
    <div>
      <div className={`${styles.imageContainer} relative w-full h-52 max-h-52 overflow-hidden mb-2 rounded-xl`}>
        <Image src={props.image} alt={props.image_alt} width={520} height={520}
               sizes={'(max-width: 520px) 100vw, 520px'}
               className={'h-full w-full  object-fill aspect-square transition-all duration-300 ease-in-out'}></Image>
      </div>
      <div className={'h-full'}>
        <div className={'my-2'}>
          <p className={'font-mono text-sm text-white'}>
            {props.project_origin}
          </p>
        </div>
        <div className={'my-2 flex items-center'}>
          <p className={'font-sans text-2xl gradient-text'}>
            {props.title}
          </p>
          <a href={props.github} target={'_blank'} className={'font-mono ml-2'}>
            <FaGithub size={24} className={'text-white'}/>
          </a>
        </div>
        <div className={'my-2'}>
          <p className={'font-sans text-base text-white/80 text-pretty text-start'}>
            {props.description}
          </p>
        </div>
        <div className={'my-2'}>
          <p className={'font-sans text-base text-white/80 text-pretty'}>
            {props?.languages.map((language, index) => {
              return (<span key={index} className={'font-mono text-sm text-purple-200'}>
            {language}{index < props.languages.length - 1 && ' | '}
        </span>);
            })}
          </p>
        </div>

      </div>
    </div>
    <div className={styles.linearLight}></div>
  </div>)
}

export default GlassCard
