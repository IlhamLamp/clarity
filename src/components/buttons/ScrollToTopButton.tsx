"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "../icons/Chevron";

const ScrollToTopButton: React.FC = () => {

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

    const handleClick = () => {
        window.scrollTo({top: 0, left:0, behavior: 'smooth'});
    };

    return (
        <button 
            type="button" 
            onClick={handleClick}
            className={`
                z-50 items-center justify-center right-8 bottom-8 !flex bg-black 
                text-white font-bold p-2 rounded-md hover:opacity-95 fixed
                ${isScrolled ? '' : 'invisible'}
            `}
        >
            <ChevronUp />
        </button>
    )
}

export default ScrollToTopButton;