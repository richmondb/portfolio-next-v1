'use client'
import React from 'react'
import Image from "next/image";

function GridBg() {


    return (<div className={'absolute top-0 left-0 right-0 grid place-items-center -z-10'}>
            <Image src={'/images/hero.svg'} alt={'design'} width={1572} height={795}/>
        </div>)
}

export default GridBg
