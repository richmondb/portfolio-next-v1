"use client"
import React from 'react'
import styles from "./backtotop.module.scss"

import useScrollPosition from "@/utils/useGetScrollPosition"
import {useMotionValueEvent} from "framer-motion";

function BacktoTop() {

    const scrollPosition = useScrollPosition()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    }

    useMotionValueEvent(scrollPosition, "change", (latest) => {
        if (latest > 0.1) {
            document.querySelector('#button')?.classList.remove('hidden')
        } else {
            document.querySelector('#button')?.classList.add('hidden')
        }
    })


    return (<div id={'button'} className={'fixed bottom-10 right-10 z-50 hidden'}>
            <button className={styles.button} onClick={scrollToTop}>
                <svg strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6"
                     xmlns="http://www.w3.org/2000/svg" width="20px">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
            </button>
        </div>)
}

export default BacktoTop
