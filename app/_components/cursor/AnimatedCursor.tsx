"use client"
import React, {useEffect} from 'react'
import "./animatedcursor.scss"

interface CircleElement extends HTMLElement {
    x: number;
    y: number;
}

function AnimatedCursor() {


    useEffect(() => {
        const coords: { x: number; y: number } = {x: 0, y: 0};
        const circles: NodeListOf<HTMLElement> = document.querySelectorAll(".circle");

        // const colors: string[] = [
        //     "#ffb56b",
        //     "#fdaf69",
        //     "#f89d63",
        //     "#f59761",
        //     "#ef865e",
        //     "#ec805d",
        //     "#e36e5c",
        //     "#df685c",
        //     "#d5585c",
        //     "#d1525c",
        //     "#c5415d",
        //     "#c03b5d",
        //     "#b22c5e",
        //     "#ac265e",
        //     "#9c155f",
        //     "#950f5f",
        //     "#830060",
        //     "#7c0060",
        //     "#680060",
        //     "#60005f",
        //     "#48005f",
        //     "#3d005e"
        // ];

        const colors2: string[] = [
            "#a3c8f9",  // Light Sky Blue
            "#8bbff3",  // Light Blue
            "#74b7ec",  // Sky Blue
            "#5aaee6",  // Dodger Blue
            "#409cd7",  // Steel Blue
            "#3589c7",  // Medium Blue
            "#2e78b7",  // Royal Blue
            "#2670a7",  // Deep Sky Blue
            "#1f68a0",  // Sapphire
            "#185f98",  // Denim Blue
            "#10578f",  // Prussian Blue
            "#0f4f87",  // Dark Blue
            "#0a467f",  // Cobalt Blue
            "#063e77",  // Midnight Blue
            "#043673",  // Navy Blue
            "#032c6b",  // Space Blue
            "#022563",  // Ocean Blue
            "#011c5b",  // Deep Blue
            "#011254",  // Dark Navy
            "#010b4c"   // Blackened Blue
        ];

        // @ts-ignore
        circles.forEach(function (circle: CircleElement, index: number) {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors2[index % colors2.length];
        });

        window.addEventListener("mousemove", function (e: MouseEvent) {
            coords.x = e.clientX;
            coords.y = e.clientY;
        });

        // eslint-disable-next-line no-inner-declarations
        function animateCircles(): void {
            let x = coords.x;
            let y = coords.y;

            // @ts-ignore
            circles.forEach(function (circle: CircleElement, index: number) {
                circle.style.left = x - 12 + "px";
                circle.style.top = y - 12 + "px";
                circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

                circle.x = x;
                circle.y = y;

                // @ts-ignore
                const nextCircle: CircleElement = circles[index + 1] as HTMLElement || circles[0] as HTMLElement;
                x += (nextCircle.x - x) * 0.4;
                y += (nextCircle.y - y) * 0.4;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();

        return (() =>{
                window.removeEventListener("mousemove", animateCircles)
        });
    },[])

    return (
        <>
            <div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>

        </>
    )
}

export default AnimatedCursor
