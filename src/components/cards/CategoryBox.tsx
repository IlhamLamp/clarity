import { ArticleItems } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import { CategoryFilter } from "../buttons/CategoryButton";

const CategoryBox: React.FC<ArticleItems> = (
    { href, images, title, description, author, date, buttons, category }
) => {
    return (
        <div className="group mx-auto">
            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                <Link href={`${href}`}>
                    <Image src={`${images}`} alt="image" width={370} height={280} className="w-full"/>
                </Link>
            </div>
            <h4>
                <Link
                    href={`${href}`} 
                    className="block text-black font-bold text-xl mb-3"
                >
                    <span className={`
                        bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px]
                        bg-left-bottom bg-no-repeat transition-[background-size] duration-500
                        hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]
                    `}>
                        {title}
                    </span>
                </Link> 
            </h4>
            <p className="text-gray-500">{description}</p>
            <div className="flex flex-wrap gap-3 items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-gray-500">
                    <Link href={author.href} className="flex items-center gap-3 to-gray-500">
                        <div className="flex w-6 h-6 rounded-full overflow-hidden">
                            <Image src={`${author.image}`} alt="author" width={24} height={24} />
                        </div>
                        <p className="text-sm">{author.name}</p>
                    </Link>
                    <span className="dots" />
                    <p className="text-sm">{date}</p>
                </div>
                <CategoryFilter
                    textColor={`${buttons.text}`} bgColor={`${buttons.bg}`}
                    href={"/category"} categoryName={category} 
                />
            </div>
        </div>
    )
}

export default CategoryBox;