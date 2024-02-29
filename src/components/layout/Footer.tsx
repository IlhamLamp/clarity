import Link from "next/link";
import { Social } from "../icons/Social";

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer className="relative z-10 py-8 border-t border-gray-300">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="flex flex-wrap items-center justify-center flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between">
                    <div>
                        <p className="text-sm">© {year} Anjay. All rights reserved</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <li>
                                <Link href={'#'} className="group leading-none flex text-sm ease-in duration-200 hover:text-black">
                                    <span className="">Kamisato</span>
                                </Link>
                            </li>
                            <li>
                                <span className="flex w-[3px] h-[3px] rounded-full bg-gray-200"></span>
                            </li>
                            <li>
                                <Link href={'#'} className="group leading-none flex text-sm ease-in duration-200 hover:text-black">
                                    <span className="">Ayaka</span>
                                </Link>
                            </li>
                            <li>
                                <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <p className="font-medium text-sm text-black">Follow Us:</p>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}