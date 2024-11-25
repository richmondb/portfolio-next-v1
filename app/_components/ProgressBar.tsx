"use client"
import React from 'react'
import {useScroll, motion} from "framer-motion"
import style from "./progressbar.module.scss"

function ProgressBar() {


    const { scrollYProgress } = useScroll();

    return (
        <motion.div className={style.progressbar} style={{scaleX: scrollYProgress}}/>
    )
}

export default ProgressBar
