"use client";
import { articles, categories } from "@/data/data";
import { CategoryButton } from "../buttons/CategoryButton";
import { useState } from "react";
import CategoryBox from "../cards/CategoryBox";
import { ArticleItems, Categories } from "@/types/blogs";
import BrowseAllButton from "../buttons/BrowseAllButton";

export default function Category() {

    const [activeCategory, setActiveCategory] = useState<string>('All');

    const handleCtgClick = (c: Categories) => {
        setActiveCategory(c.name);
        console.log(c.name);
    }
    
    return(
        <section className="pt-20 lg:pt-24 pb-14">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="mb-12 text-center">
                    <h2 className="text-dark mb-3 text-3xl font-bold sm:text-4xl">
                        Browse by Category
                    </h2>
                    <p className="text-gray-500">Select a category to see more related content</p>
                </div>
                {/* BUTTON */}
                <div className="flex flex-wrap justify-center gap-4 items-center mb-14">
                    { categories.length > 0 && (
                        <>
                            <CategoryButton
                                key={'All'} 
                                text={'All'} length={articles.length} isActive={activeCategory === 'All'}
                                onClick={() => setActiveCategory('All')}
                            />
                            { categories.map((c: Categories) => (
                                <CategoryButton
                                    key={c.id} 
                                    text={c.name} 
                                    length={ articles.filter((article: ArticleItems) => 
                                        article.category === c.name).length
                                    }
                                    onClick={() => handleCtgClick(c)}
                                    isActive={activeCategory === c.name}
                                />
                            ))}
                        </>
                    )}
                </div>
                {/* BOX */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7">
                    { activeCategory === 'All'
                        ? articles.slice(-6).map((item: ArticleItems) => (
                            <CategoryBox 
                                href={item.href} images={item.images} title={item.title} description={item.description} 
                                author={item.author} date={item.date} buttons={item.buttons} category={item.category}
                                key={item.href}
                            />
                        ))
                        : articles.filter((item: ArticleItems) => item.category === activeCategory).map((item: any) => (
                            <CategoryBox 
                                href={item.href} images={item.images} title={item.title} description={item.description} 
                                author={item.author} date={item.date} buttons={item.buttons} category={item.category}
                                key={item.href}
                            />  
                        ))
                    }
                </div>
                <div className="mx-auto justify-center flex">
                    <BrowseAllButton />
                </div>
            </div>
        </section>
    )
}