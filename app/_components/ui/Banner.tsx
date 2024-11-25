import React from 'react'

type BannerProps = {
    sectionTitle: string,
}

function Banner(BannerProps : BannerProps) {
    return (
        <div className={'text-center py-6'}>
            <h2 className={'text-2xl md:text-3xl lg:text-5xl tracking-wide font-bold text-[#61d1ac]'}>{BannerProps.sectionTitle}</h2>
        </div>
    )
}

export default Banner
