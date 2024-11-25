'use client'
import React, {useRef, useState} from 'react';
import {CiPause1, CiPlay1} from 'react-icons/ci';

function SoundControl() {
    const [isPlaying, setIsPlaying] = useState(false);

    const soundRef = useRef<HTMLAudioElement | null>(null);


    const togglePlayPause = () => {
        if (isPlaying) {
            setIsPlaying(false);
            soundRef.current?.pause();
        } else {
            setIsPlaying(true);
            soundRef.current?.play();
        }
    };

    return (<div className="grid place-items-center">
            <audio ref={soundRef} src={'/sound/neo-nebula.mp3'} playsInline={true} autoPlay={true} loop={true}
                   preload={'auto'}/>
            {/* Play/Pause toggle */}
            <div
                onClick={togglePlayPause}
                className="relative cursor-pointer"
            >
                {/* Display the appropriate icon based on state */}
                {isPlaying ? (<CiPause1
                        className="text-3xl hover:scale-125 transition-all duration-300 ease-in-out"
                    />) : (<CiPlay1
                        className="text-3xl hover:scale-125 transition-all duration-300 ease-in-out"
                    />)}
            </div>
        </div>);
}

export default SoundControl;
