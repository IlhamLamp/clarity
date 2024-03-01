import { CategoryFilter } from "@/components/buttons/CategoryButton";
import AboutAuthor from "@/components/cards/AboutAuthor";
import ContentHorizontal from "@/components/cards/ContentHorizontal";
import ContentList from "@/components/cards/ContentList";
import ContentQuote from "@/components/cards/ContentQuote";
import ExploreTopics from "@/components/cards/ExploreTopics";
import NewsletterCard from "@/components/cards/NewsletterCard";
import RecentPosts from "@/components/cards/RecentPosts";
import TagReference from "@/components/cards/TagReference";
import Image from "next/image";
import Link from "next/link";

export default function BlogThree() {
    return(
        <section className="pt-32 pb-16">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="flex flex-wrap gap-7">

                    {/* LEFT */}
                    <div className="xl:max-w-[770px] w-full">
                        <Image 
                            src={'https://clarity-tailwind.preview.uideck.com/images/blog-single-03.png'}
                            alt="blog" width={770} height={400} className="w-full mb-9"
                        />
                        <h1 className="font-bold text-2xl sm:text-4xl lg:text-4xl text-black mb-5">
                            Give Your Space a Parisian - Inspired Makeover
                        </h1>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <Link href={'#'}>
                                <Image 
                                    src={'https://clarity-tailwind.preview.uideck.com/images/user-02.png'}
                                    alt="user" width={34} height={34}
                                />
                            </Link>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex flex-wrap items-center gap-2 text-gray-500">
                                    <h4 className="text-sm">
                                        <Link href={'#'}>Farhan Kebab</Link>
                                    </h4>
                                    <span className="dots" />
                                    <p className="text-sm">Sep 10, 2024</p>
                                    <span className="dots" />
                                    <p className="text-sm">12 min read</p>
                                </div>
                                <CategoryFilter 
                                    textColor={`text-green-500`} bgColor={`bg-green-500/[0.08]`}
                                    href={'#'} categoryName={`Health`}
                                />
                            </div>
                        </div>
                        {/* CONTENT */}
                        <div className="mt-9">
                            <p className="mb-5 text-body">
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some
                                form, by injected humour, or randomised words which don't look
                                even slightly believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing hidden in the middle of text. All the Lorem Ipsum
                                generators on the Internet tend to.
                            </p>
                            <p className="text-body">
                                As discussed in the introduction post, one of the best things
                                about Ghost is just how much you can customize to turn your
                                site into something unique. Everything about your layout and
                                design can be changed, so you're not stuck with yet another
                                clone of a social network profile.
                            </p>
                        </div>
                        {/* Content Quote */}
                        <ContentQuote />
                        <p className="text-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            id quam at justo ullamcorper vulputate. Donec mattis aliquam
                            urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                            purus, quis feugiat.
                        </p>
                        {/* Content Horizontal */}
                        <ContentHorizontal />
                        {/* Content List */}
                        <ContentList />
                        {/* REFS */}
                        <TagReference />
                        {/* About */}
                        <AboutAuthor />
                    </div>

                    {/* RIGHT */}
                    <div className="max-w-[370px] w-full mx-auto">
                        <div className="flex flex-col gap-10">
                            <RecentPosts />
                            <ExploreTopics/>
                            <NewsletterCard />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}