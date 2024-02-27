"use client";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { ChevronDown } from "../icons/Chevron";
import Search from "../icons/Search";
import HeaderDropdown from "../cards/HeaderDropdown";
import { navItems } from "@/data/data";
import SubscribeButton from "../buttons/SubscribeButton";
import Social from "../icons/Social";

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
                    <div className="flex items-center gap-5">
                        <Social />
                        <span className="bg-canvas/50 text-gray-500 search-hover cursor-pointer">
                            <Search />
                        </span>
                        <SubscribeButton />
                    </div>
                </nav>
            </div>
        </header>
    )
}