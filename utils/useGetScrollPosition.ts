"use client"

import {MotionValue, useScroll} from "framer-motion";

export default function useScrollPosition(): MotionValue<number> {
    const { scrollYProgress } = useScroll();


    return scrollYProgress;
}

