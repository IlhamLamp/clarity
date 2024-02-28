import CategoryButton from "@/components/buttons/CategoryButton";
import { ctgItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

interface CategoryItems {
    href: string;
    images: string;
    title: string;
    description: string;
    author: {
        name: string;
        image: string;
        href: string;
    };
    date: string;
    category: string;
}

export default function CategoryPage() {
    return (
        <section className="pt-32 pb-16">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="text-center mb-14">
                    <h1 className="font-bold text-2xl sm:text-xl lg:text-4xl text-black mb-3">
                        Technology
                    </h1>
                    <p>3 Posts</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7">
                    { ctgItems.map((item: CategoryItems) => (
                        <div className="group mx-auto" key={item.href}>
                            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                                <Link href={`${item.href}`}>
                                    <Image src={`${item.images}`} alt="image" width={370} height={280}/>
                                </Link>
                            </div>
                            <h4>
                                <Link
                                    href={`${item.href}`} 
                                    className="block text-black font-bold text-xl mb-3"
                                >
                                    <span className={`
                                        bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px]
                                        bg-left-bottom bg-no-repeat transition-[background-size] duration-500
                                        hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]
                                    `}>
                                        {item.title}
                                    </span>
                                </Link> 
                            </h4>
                            <p className="text-body">{item.description}</p>
                            <div className="flex flex-wrap gap-3 items-center justify-between mt-4">
                                <div className="flex items-center gap-2">
                                    <Link href={item.author.href} className="flex items-center gap-3 to-gray-500">
                                        <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                            <Image src={`${item.author.image}`} alt="author" width={24} height={24} />
                                        </div>
                                        <p className="text-sm">{item.author.name}</p>
                                    </Link>
                                    <span className="flex w-[3px] h-[3px] rounded-full"></span>
                                    <p className="text-sm">{item.date}</p>
                                </div>
                                <CategoryButton 
                                    textColor={"text-primary"} bgColor={"bg-blue-50"} 
                                    href={"/category"} categoryName={item.category} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}