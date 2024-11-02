"use client"
import React from 'react'
import {useScroll, motion, useMotionValueEvent} from "framer-motion"
import style from "./progressbar.module.scss"

function ProgressBar() {


    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("the latest value is", latest)
    })

    return (
        <motion.div className={style.progressbar} style={{scaleX: scrollYProgress}}/>
    )
}

export default ProgressBar
