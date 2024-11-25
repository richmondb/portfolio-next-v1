'use client'
import React from 'react'
import Image from "next/image";

function SpectrumBg() {


    return (<div className={'absolute -z-10 bottom-0 left-0 right-0 flex justify-center items-center'}>
            <Image src={'/images/card.png'} priority={false} alt={'spectrum'} width={1572} height={795}
                   className={'object-fill bg-center w-full h-[600px]'}/>
        </div>)
}

export default SpectrumBg
