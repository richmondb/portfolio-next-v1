'use client'
import React, { useState } from 'react';
import style from './spring-cards.module.scss';

function SpringCards({container_classname, children}: {container_classname?: string, children: React.ReactNode; card_color:string}) {
    const [isHovered, setIsHovered] = useState(false);


    const onHoverEnter = () => {
       setIsHovered(true);

     }

     const onHoverLeave = () => {
        setIsHovered(false);

     }

    // Tailwind class names for the transformations
    const animation = `transition-all duration-500 ease-in-out`

    const border_style = `border border-solid border-gray-700`;

    const cardOneClass = `h-full w-full absolute inset-0 rounded bg-[rgba(255,255,255,0.03)] backdrop-blur-sm transform  ${border_style} ${animation} ${isHovered ? '-translate-x-3 -translate-y-3' : ''}`;
    const cardTwoClass = `h-full w-full absolute inset-0  rounded transform bg-[rgba(255,255,255,0.10)] backdrop-blur-xl ${border_style} ${animation} ${isHovered ? '-translate-x-6 -translate-y-6' : ''}`;
    return (
        <div className={`${style.cards_container} relative rounded bg-[rgba(255,255,255,0.02)] backdrop-blur-sm ${border_style} ${animation} ${container_classname} `}
        >

            <div className={cardOneClass}></div>
            <div
                onMouseEnter={() => onHoverEnter()}
                onMouseLeave={() => onHoverLeave()}
                className={cardTwoClass}
            >
                <div className="w-full h-full p-4 flex items-center justify-evenly flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SpringCards;
