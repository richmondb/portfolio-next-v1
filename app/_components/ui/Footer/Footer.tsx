import React from 'react'

function Footer() {


    return (
        <div className={'px-12 lg:px-20 border-t bg-[#0d1224] border-[#353951]'}>
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div
                        className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
                </div>
            </div>
            <div className={'py-6 flex flex-col md:flex-row justify-between items-center justify-center gap-4'}>
                <a
                    href="/"
                    className="roboto-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-2xl cursor-pointer">
                    Richmond.
                </a>
                <p className={'text-gray-500 roboto-regular text-sm text-center'}>
                    Developed by Richmond. 2024
                </p>
                {/*<div>*/}
                {/*    links*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Footer
