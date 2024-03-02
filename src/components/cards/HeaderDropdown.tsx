import { useWindowWidth } from "@react-hook/window-size";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface DropdownItem {
    label: string;
    href?: string;
}

interface HeaderDropdownProps {
    items: DropdownItem[];
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ items }) => {

    const [screenSize, setScreenSize] = useState<boolean>(false);
    const width = useWindowWidth();
    const path = usePathname();

    useEffect(() => {
        const screen = () => {
            // LAPTOP SIZE
            console.log(width);
            if (width > 1024) {
                setScreenSize(true);
            } else {
                setScreenSize(false);
            }
        }
        return screen;
    }, [])

    return ( items.length > 0 &&
        <ul className={ screenSize
            ? "invisible bg-white dropdown-position flex-col items-center p-4 shadow-2xl group-hover:visible"
            : "bg-white flex-col items-center shadow-xl rounded-lg"
        }>
            {items.map((item: DropdownItem) => (
                item.href &&
                    <li key={item.label}
                        className={`
                            block m-1 w-full px-1 py-2 rounded-md text-sm hover:bg-canvas hover:text-primary cursor-pointer
                            ${path === item.href ? 'activePath' : '' }
                        `}
                    >
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                    </li> 
                )
            )}
        </ul>
    )
}

export default HeaderDropdown;