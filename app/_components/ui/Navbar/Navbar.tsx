import Image from "next/image";


function Navbar() {
    return (
        <nav className="bg-transparent">
            <div className="flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    <a
                        href="/"
                        className="roboto-regular text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-4xl font-bold">
                        <span className={''}>Richmond.</span>
                        {/*<span className={'sm:hidden'}>R</span>*/}
                    </a>
                </div>
                <div className="flex flex-shrink-0 items-center">
                    <Image src={'/heart-love-2.gif'} alt={'cutesy-nyan-cat'} width={128} height={128} unoptimized={true} className="w-20 h-auto" />
                </div>


                {/*<ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"*/}
                {/*    id="navbar-default">*/}
                {/*    <li>*/}
                {/*        <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">*/}
                {/*            <div*/}
                {/*                className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a className="block px-4 py-2 no-underline outline-none hover:no-underline"*/}
                {/*              href="/#experience">*/}
                {/*            <div*/}
                {/*                className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">*/}
                {/*            <div*/}
                {/*                className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a className="block px-4 py-2 no-underline outline-none hover:no-underline"*/}
                {/*              href="/#education">*/}
                {/*            <div*/}
                {/*                className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog">*/}
                {/*            <div*/}
                {/*                className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a className="block px-4 py-2 no-underline outline-none hover:no-underline"*/}
                {/*              href="/#projects">*/}
                {/*            <div*/}
                {/*                className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </nav>
    );
}

export default Navbar;