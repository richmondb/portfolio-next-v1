import React from 'react'
import {GrGithub, GrLinkedin} from "react-icons/gr";
import {MdOutlineAlternateEmail} from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

function ContactSection() {
    return (
        <>
            <div className="relative flex flex-shrink-0 items-center justify-center pt-6">
                <div
                    className="w-[120px] h-[120px] bg-violet-600 rounded-full absolute filter blur-3xl  opacity-20"></div>
                <span className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-purple-400 "></span>
                <h2 className={'text-2xl lg:text-4xl font-mono px-1.5 whitespace-nowrap px-1.5'}>
                    <span
                        className={'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'}>C</span>
                    ontact Me
                </h2>
                <span className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-purple-400 "></span>
            </div>
            <div className={'relative flex justify-center items-center p-8'}>
                <div>
                    <div className={'flex flex-row justify-center items-center gap-8 p-4'}>
                        <a href="https://github.com/richmondb" target={'_blank'}>
                            <GrGithub className={'text-3xl hover:scale-125 transition-all duration-300'}/>
                        </a>
                        <a href="https://www.facebook.com/richmondjohnbillones/" target={'_blank'}>
                            <FaFacebook className={'text-3xl hover:scale-125 transition-all duration-300'}/>
                        </a>
                        <a href="https://www.linkedin.com/in/richmondbillones" target={'_blank'}><GrLinkedin
                            className={'text-3xl hover:scale-125 transition-all duration-300'}
                        /></a>
                        <a href={"mailto:richmondjohnbillones@gmail.com"} target={'_blank'}><MdOutlineAlternateEmail
                            className={'text-3xl hover:scale-125 transition-all duration-300'}/></a>

                    </div>
                </div>
            </div>
        </>

    )
}

export default ContactSection
