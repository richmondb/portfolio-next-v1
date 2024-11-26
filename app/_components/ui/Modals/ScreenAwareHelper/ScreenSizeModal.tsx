"use client"
import React, {useEffect} from 'react'
import {useIsMobile} from "@/utils/useIsMobile";

function ScreenSizeModal() {

    const [showModal, setShowModal] = React.useState(false);

    const isMobile = useIsMobile();


    // console.log('ScreenSizeModal', useIsMobile())

    useEffect(() => {
        if (isMobile) {
            setShowModal(true);
        }else{
            setShowModal(false);
        }
    }, [isMobile]);

    return (<>
        {showModal ? (<>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-4 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[linear-gradient(180deg, rgba(13, 8, 25, 0.8) -70.17%, rgba(12, 9, 22, 0.8) 15.53%, rgba(0, 0, 0, 0.8) 100%)] backdrop-blur-2xl outline-none focus:outline-none">
                        <div className="relative p-6 flex-auto text-center">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                For the best experience, please view this website on a desktop screen.
                            </p>
                        </div>
                        {/*footer*/}
                        <div
                            className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-white background-transparent border border-white rounded border-solid font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Okay, sure.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 filter blur-lg fixed inset-0 z-40 bg-black"></div>
        </>) : null}
    </>)
}

export default ScreenSizeModal
