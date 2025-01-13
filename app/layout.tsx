import type {Metadata} from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";
import ProgressBar from "@/app/_components/ProgressBar";
import HeroSection from "@/app/_components/ui/HeroSection/HeroSection";
import AnimatedCursor from "@/app/_components/cursor/AnimatedCursor";
import Footer from "@/app/_components/ui/Footer/Footer";
import Navbar from "@/app/_components/ui/Navbar/Navbar";
import BacktoTop from "@/app/_components/BacktoTop";
import Devhelper from "@/app/_components/helper/devhelper";
import SpectrumBg from "@/app/_components/ui/HeroBackgrounds/SpectrumBg";
import GridBg from "@/app/_components/ui/HeroBackgrounds/GridBg";
import ScreenSizeModal from "@/app/_components/ui/Modals/ScreenAwareHelper/ScreenSizeModal";
import React from "react";
import GoogleAnalytics from "@/app/analytics/GoogleAnalytics";


const geistSans = localFont({
    src: "/assets/fonts/GeistVF.woff", variable: "--font-geist-sans", weight: "100 900",
});
const geistMono = localFont({
    src: "/assets/fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900",
});

export const metadata: Metadata = {
    title: "Portfolio by Richmond", description: "Personal portfolio by Richmond, created using NextJS and Animation by Framer-Motion",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (<html lang="en">
    <body
        className={`relative body ${geistSans.variable} ${geistMono.variable} relative text-white antialiased`}>
    <GoogleAnalytics/>
    <ProgressBar/>
    <ScreenSizeModal/>
    <GridBg/>
    <main
        className={'min-h-screen mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]'}>
        <Navbar/>
        <HeroSection/>
        {children}
    </main>
    <SpectrumBg/>
    <Footer/>
    <BacktoTop/>
    <AnimatedCursor/>
    <Devhelper/>


    </body>
    </html>);
}
