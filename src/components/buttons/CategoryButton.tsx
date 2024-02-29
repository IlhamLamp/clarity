import Link from "next/link";

interface CtgFilterProps {
    textColor: string;
    bgColor: string;
    href: string;
    categoryName: string;
}

interface CtgButtonProps {
    text: string;
    length: number;
    onClick: any;
    isActive: boolean;
}

const CategoryFilter: React.FC<CtgFilterProps> = ({textColor, bgColor, href, categoryName}) => {
    return (
        <div className={`${bgColor} inline-flex font-medium text-sm py-1 px-3 rounded-full mb-1`}>
            <Link href={href} className={textColor}>
                {categoryName}
            </Link>
        </div>
    )
}

const CategoryButton: React.FC<CtgButtonProps> = ({text, length, isActive, onClick}) => {
    return (
        <button
            className={`
                rounded-full border py-2 px-4 font-medium hover:bg-black hover:border-black
                hover:text-white ease-in duration-200 bg-black border-black text-white
                ${isActive ? 'ctgActive' : 'ctgInactive'}
        `}
            onClick={onClick}
        >
            <span>{text}</span>
            <span>({length})</span>
        </button>
    )
}

export { CategoryButton, CategoryFilter };