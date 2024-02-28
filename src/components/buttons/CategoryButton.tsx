import Link from "next/link";

interface CtgButtonProps {
    textColor: string;
    bgColor: string;
    href: string;
    categoryName: string;
}

const CategoryButton: React.FC<CtgButtonProps> = ({textColor, bgColor, href, categoryName}) => {
    return (
        <div className={`${bgColor} inline-flex font-medium text-sm py-1 px-3 rounded-full mb-1`}>
            <Link href={href} className={textColor}>
                {categoryName}
            </Link>
        </div>
    )
}

export default CategoryButton;