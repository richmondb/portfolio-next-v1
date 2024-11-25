"use client"

import { useState, useEffect } from 'react';

export const useIsMobile = () => {
    // State to store the mobile status (true if mobile, false otherwise)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Define a media query to match devices smaller than 640px (Tailwind's sm breakpoint)
        const mobileQuery = window.matchMedia('(max-width: 640px)');

        // Set the initial state based on the current screen size
        setIsMobile(mobileQuery.matches);

        // Add a listener to update the state when the screen size changes
        const handleResize = () => {
            setIsMobile(mobileQuery.matches);
        };

        // Attach the listener to the media query
        mobileQuery.addEventListener('change', handleResize);

        // Cleanup listener on component unmount
        return () => {
            mobileQuery.removeEventListener('change', handleResize);
        };
    }, []);

    return isMobile;
};
