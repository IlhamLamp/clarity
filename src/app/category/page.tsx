import CategoryBox from "@/components/cards/CategoryBox";
import { articles } from "@/data/data";
import { ArticleItems } from "@/types/blogs";

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
                    { articles.map((item: ArticleItems) => (
                        <CategoryBox 
                            href={item.href} images={item.images} title={item.title} description={item.description} 
                            author={item.author} date={item.date} buttons={item.buttons} category={item.category}
                            key={item.href}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}