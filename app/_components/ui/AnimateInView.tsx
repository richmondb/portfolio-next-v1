'use client'
import React, {useRef} from "react";
import {motion, useInView} from "framer-motion";

function AnimateInView({sectionname, children}: { sectionname: string, children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null);

    const isInView = useInView(ref, {once: false});


    return (<motion.div ref={ref}
                        style={{
                            opacity: isInView ? 1 : 0, transition: "all 250ms cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}>
        <p className={'sr-only'}>{sectionname}</p>
        {children}
    </motion.div>)
}

export default AnimateInView
