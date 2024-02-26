"use client";
import Link from "next/link";
import { FaDiscord, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { ChevronDown } from "../icons/Chevron";
import Search from "../icons/Search";
import HeaderDropdown from "../cards/HeaderDropdown";
import { navItems } from "@/data/data";

export default function Header() {

    return (
        <header className="bg-white shadow-md">
            {/* CONTAINER */}
            <div className="max-w-6xl flex items-center mx-auto p-4 justify-between">
                {/* LOGO */}
                <Link href="/" className="font-bold flex items-center gap-2 text-2xl">
                    <FaDiscord className="w-10 h-10 text-primary" />
                    <span className="text-black">Clarity</span>
                </Link>
                {/* MENU */}
                <nav className="flex items-center gap-8">
                    {navItems.map((item: any) => (
                        <div key={item.label} className="group relative">
                            <div className="flex items-center gap-2">
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                                <ChevronDown />
                            </div>
                            <HeaderDropdown items={item.sub} />
                        </div>
                    ))}
                    <Link href={'#'}>Support</Link>
                </nav>
                {/* SOC-ICON */}
                <nav className="flex items-center gap-10">
                    <div className="flex items-center gap-2 text-gray-500">
                        <Link href={'#'} className="social-hover"><FaFacebookF /></Link>
                        <Link href={'#'} className="social-hover"><FaTwitter /></Link>
                        <Link href={'#'} className="social-hover"><FaLinkedinIn /></Link>
                        <Link href={'#'} className="social-hover"><FaPinterest /></Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="bg-canvas/50 text-gray-500 search-hover cursor-pointer">
                            <Search />
                        </span>
                        <button className="button">
                            Subscribe
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}