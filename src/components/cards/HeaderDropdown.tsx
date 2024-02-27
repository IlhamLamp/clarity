import Link from "next/link";

interface DropdownItem {
    label: string;
    href?: string;
}

interface HeaderDropdownProps {
    items: DropdownItem[];
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ items }) => {
    return (
        <div className="invisible bg-white dropdown-position flex-col items-center p-4 shadow-xl group-hover:visible">
            {items.map((item: DropdownItem) => (
                item.href &&
                    <div className="m-1 px-1 py-2 rounded-md text-sm hover:bg-canvas hover:text-primary cursor-pointer" key={item.label}>
                        <Link href={item.href}>
                            <span>{item.label}</span>
                        </Link>
                    </div> 
            ))}
        </div>
    )
}

export default HeaderDropdown;