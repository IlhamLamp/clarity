
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropdownItem {
    label: string;
    href?: string;
}

interface HeaderDropdownProps {
    items: DropdownItem[];
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ items }) => {

    const path = usePathname();

    return ( items.length > 0 &&
        <ul className="bg-white flex-col items-center shadow-xl rounded-lg lg:dropdown-position">
            {items.map((item: DropdownItem) => (
                item.href &&
                    <li key={item.label}
                        className={`
                            block m-1 w-full px-1 py-2 rounded-md text-sm hover:bg-canvas hover:text-primary cursor-pointer
                            ${path === item.href ? 'activePath' : '' }
                        `}
                    >
                        <Link href={item.href}>
                            <span>{item.label}</span>
                        </Link>
                    </li> 
                )
            )}
        </ul>
    )
}

export default HeaderDropdown;