"use client";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { ChevronDown } from "../icons/Chevron";
import Search from "../icons/Search";
import HeaderDropdown from "../cards/HeaderDropdown";
import { navItems } from "@/data/data";
import SubscribeButton from "../buttons/SubscribeButton";
import { Social } from "../icons/Social";
import HamburgerMenu from "../icons/HamburgerMenu";
import { useEffect, useState } from "react";
import Close from "../icons/Close";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header 
            className={
                `fixed left-0 top-0 z-50 w-screen bg-white transition-all ease-in-out duration-300
                ${isScrolled ? 'py-1 shadow-md': 'py-5'} ${ isMenuOpen ? "h-[calc(50vh)]" : "" }
                `
            }
        >
            {/* CONTAINER */}
            <div className="max-w-[1170px] w-full h-full mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
                {/* LOGO */}
                <div className="lg:w-3/12 flex items-center justify-between">
                    <Link href="/" className="font-bold flex items-center gap-2 text-2xl">
                        <FaDiscord className="w-7 h-7 text-primary" />
                        <span className="text-black">Clarity</span>
                    </Link>
                    {/* MOBILE-MENU */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="my-1 items-center">
                            { isMenuOpen ? <Close /> : <HamburgerMenu /> }
                        </button>
                    </div>
                </div>
                {/* MENU */}
                <div 
                    className={
                        `w-full lg:w-9/12 h-0 lg:h-auto 
                        ${ isMenuOpen ? "block" : "invisible" } 
                        lg:visible lg:flex items-center justify-between mx-auto px-4 sm:px-8 xl:px-0`
                    }
                >
                    <nav>
                        <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10 p-3 m-1 lg:p-0">
                            {navItems.map((item: any) => (
                                <li key={item.label} className="group relative lg:py-6.5">
                                    <Link 
                                        href={item.href}
                                        className="hover:text-black flex items-center justify-between gap-3"
                                    >
                                        <span>{item.label}</span>
                                        <span>{item.sub.length > 0 ? <ChevronDown /> : null}</span>
                                    </Link>
                                    <div className="group-hover:block absolute hidden h-auto">
                                        <HeaderDropdown items={item.sub} /> 
                                    </div>
                                </li>
                            ))}  
                        </ul>
                    </nav>
                    {/* SOC-ICON */}
                    <div className="flex flex-wrap items-center px-2 lg:px-0 mt-7 lg:mt-0 gap-10">
                        <div>
                            <Social />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-canvas/50 text-gray-500 search-hover cursor-pointer">
                                <Search />
                            </span>
                            <SubscribeButton />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}