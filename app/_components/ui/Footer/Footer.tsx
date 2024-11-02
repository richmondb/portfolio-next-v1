import React from 'react'

function Footer() {
    return (
        <div className={'px-12 lg:px-20'}>
            <hr/>
            <div className={'py-6 flex justify-between items-center'}>
                <a
                    href="/"
                    className="roboto-light text-[#16f2b3] text-2xl cursor-pointer">
                    Richmond.
                </a>
                <p className={'text-gray-500 roboto-regular text-sm'}>
                    Powered by RemixJS | Iteration 1
                </p>
                {/*<div>*/}
                {/*    links*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Footer
