"use client"
import React from 'react'
import {SiDjango, SiMysql, SiTailwindcss,} from "react-icons/si";
import {IconType} from "react-icons";
import {useAnimate} from "framer-motion";
import Banner from "@/app/_components/ui/Banner";
import {FaBootstrap, FaDocker, FaFigma, FaLaravel, FaReact} from "react-icons/fa6";
import {RiNextjsLine} from "react-icons/ri";
import Image from "next/image";


function SkillsSection() {
    return (<div className="relative px-4 my-4 lg:my-8 py-8 lg:py-16">
        <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
                <div
                    className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
            </div>
        </div>
        <div className={'absolute inset-0 top-[2.75rem] -z-10'}>
            <Image src={'/svg/blur-23.svg'} alt={'spotlight'} width={600} height={1200} className={'w-full'}/>
        </div>

        <Banner sectionTitle={'Skills'}/>

        <div className="mx-auto max-w-7xl">
            <ClipPathLinks/>
        </div>
    </div>)
}

const ClipPathLinks = () => {

    return (<>
            <div className="divide-y divide-amber-50 border border-white">

                <div className="grid grid-cols-2 divide-x divide-amber-50">

                    <LinkBox Icon={FaLaravel} alt={'Laravel'}/>

                    <LinkBox Icon={FaReact} alt={'React'}/>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-amber-50">

                    <LinkBox Icon={RiNextjsLine} alt={'Next.js'}/>

                    <LinkBox Icon={FaFigma} alt={'Figma'}/>

                    <LinkBox Icon={SiMysql} alt={'Mysql'}/>

                    <LinkBox Icon={SiDjango} alt={'Django'}/>


                </div>

                <div className="grid grid-cols-3 divide-x divide-amber-50">

                    <LinkBox Icon={FaDocker} alt={'Docker'}/>

                    <LinkBox Icon={SiTailwindcss} alt={'Tailwindcss'}/>

                    <LinkBox Icon={FaBootstrap} alt={'Bootstrap'}/>

                </div>

            </div>
            <div className={'py-5 text-center'}>
                <p className={'text-sm  text-gray-400 font-mono'}>and .Net ecosystem.</p>
            </div>
        </>


    );

};


const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";

const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";

const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";

const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";


const ENTRANCE_KEYFRAMES = {

    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],

    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],

    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],

    right: [TOP_LEFT_CLIP, NO_CLIP],

};


const EXIT_KEYFRAMES = {

    left: [NO_CLIP, TOP_RIGHT_CLIP],

    bottom: [NO_CLIP, TOP_RIGHT_CLIP],

    top: [NO_CLIP, TOP_RIGHT_CLIP],

    right: [NO_CLIP, BOTTOM_LEFT_CLIP],

};


const LinkBox = ({Icon, alt}: { Icon: IconType; alt: string }) => {

    const [scope, animate] = useAnimate();


    const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>) => {

        const box = (e.target as HTMLElement).getBoundingClientRect();


        const proximityToLeft = {

            proximity: Math.abs(box.left - e.clientX),

            side: "left",

        };

        const proximityToRight = {

            proximity: Math.abs(box.right - e.clientX),

            side: "right",

        };

        const proximityToTop = {

            proximity: Math.abs(box.top - e.clientY),

            side: "top",

        };

        const proximityToBottom = {

            proximity: Math.abs(box.bottom - e.clientY),

            side: "bottom",

        };


        const sortedProximity = [

            proximityToLeft,

            proximityToRight,

            proximityToTop,

            proximityToBottom,

        ].sort((a, b) => a.proximity - b.proximity);


        return sortedProximity[0].side;

    };


    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {

        const side = getNearestSide(e);

        // @ts-ignore
        animate(scope.current, {
            // @ts-ignore
            clipPath: ENTRANCE_KEYFRAMES[side],

        });

    };


    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {

        const side = getNearestSide(e);

        // @ts-ignore
        animate(scope.current, {
            // @ts-ignore
            clipPath: EXIT_KEYFRAMES[side],

        });

    };


    return (

        <a


            onMouseEnter={(e) => {

                handleMouseEnter(e);

            }}

            onMouseLeave={(e) => {

                handleMouseLeave(e);

            }}

            className="relative grid justify-items-center h-20 w-full place-content-center sm:h-28 md:h-36 gap-0"

        >
            <p className={'text-center text-sm lg:text-base text-transparent select-none'}>{alt}</p>
            <Icon className="text-xl sm:text-3xl lg:text-4xl"/>
            <p className={'text-center text-sm lg:text-base text-transparent select-none'}>{alt}</p>

            <div

                ref={scope}

                style={{

                    clipPath: BOTTOM_RIGHT_CLIP,

                }}

                className="absolute inset-0 grid place-content-center bg-white text-white"

            >
                <div className="relative grid justify-items-center">
                    <p className={'text-center text-sm lg:text-base text-transparent select-none'}>{alt}</p>
                    <Icon className="text-xl sm:text-3xl md:text-4xl text-[#0d1224]"/>
                    <p className={'text-center text-sm lg:text-base text-black select-none'}>{alt}</p>
                </div>


            </div>

        </a>


    );

};

export default SkillsSection
