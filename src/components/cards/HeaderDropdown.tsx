import Link from "next/link";

interface DropdownItem {
    label: string;
    href?: string;
}

interface HeaderDropdownProps {
    items: DropdownItem[];
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ items }) => {

    return ( items.length > 0 &&
        <ul className="bg-white dropdown-position flex-col items-center p-4 shadow-xl">
            {items.map((item: DropdownItem) => (
                item.href &&
                    <li className="block m-1 px-1 py-2 rounded-md text-sm hover:bg-canvas hover:text-primary cursor-pointer" key={item.label}>
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