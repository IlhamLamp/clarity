import { CategoryFilter } from "@/components/buttons/CategoryButton";
import ExploreTopics from "@/components/cards/ExploreTopics";
import NewsletterCard from "@/components/cards/NewsletterCard";
import RecentPosts from "@/components/cards/RecentPosts";
import { Social, SocialColor } from "@/components/icons/Social";
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
                        <div className="rounded-md bg-gray-50 py-9 px-10 my-8">
                            <p className="font-semibold italic text-black text-center">                                
                                “As discussed in the introduction post, one of the best things
                                about Ghost is just how much you can customize so you're not
                                stuck with yet another something unique.”
                            </p>
                            <Link href={'#'} className="flex items-center justify-center gap-3 mt-5">
                                <div className="flex w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        src={'https://clarity-tailwind.preview.uideck.com/images/user-02.png'}
                                        alt="user" width={40} height={40}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium text-black text-sm">Farhan Kebab</h4>
                                    <p className="text-xs">Founder @jeeb-box</p>
                                </div>
                            </Link>
                        </div>
                        <p className="text-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            id quam at justo ullamcorper vulputate. Donec mattis aliquam
                            urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                            purus, quis feugiat.
                        </p>
                        <div className="flex flex-wrap items-center gap-7 mt-10">
                            <div className="lg:max-w-[360px] w-full">
                                <Image 
                                    src={'https://clarity-tailwind.preview.uideck.com/images/blog-single-06.png'}
                                    alt="blog" className="w-full" width={360} height={365}
                                />
                            </div>
                            <div className="lg:max-w-[380px] w-full">
                                <h3 className="font-bold text-3xl text-black mb-4">sode no kiruto</h3>
                                <p className="mb-5 text-body">
                                    幾何学模様を 辿って歩く
                                    同じ所で たどり着いた 
                                    余った袖を 引き止めてる
                                    君といる今日が ずっと
                                    奇跡みたいで 叫んだ
                                </p>
                                <p className="text-body">
                                    忘れたくない 一瞬の声
                                    君が靡く 僕は願う
                                    今はまだ このままで
                                    不揃いのサビ 繫ぐ花火
                                    言いたい言葉 走って
                                    叫びたい気持ちを 恥じらって
                                    思い出せる 僕を着ると
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="font-semibold text-3xl text-dark mb-6">Kikagaku moyou wo tadotte aruku</h2>
                            <p className="text-body">
                                Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper. Class aptent taciti 
                                sociosqu ad litora torquent per conubia nostra, per cursus himenaeos.
                            </p>
                            <ul className="flex flex-col gap-4 mt-5">
                                <li className="flex gap-2 text-body">
                                    <span>1.</span>
                                    <p>
                                        <span className="text-bold font-semibold">Onaji tokoro de tadoritsuita </span>{''}
                                        viverra, nec cursus leo ullamcorper nec cursus leo
                                        ullamcorper. Class aptent taciti sociosqu ad litora
                                        torquent per conubia nostra, per cursus himenaeos.
                                    </p>
                                </li>
                                <li className="flex gap-2 text-body">
                                    <span>2.</span>
                                    <p>
                                        <span className="text-bold font-semibold">Amatta sode wo hikitometeru </span>{''}
                                        viverra, nec cursus leo ullamcorper nec cursus leo
                                        ullamcorper. Class aptent taciti sociosqu ad litora
                                        torquent per conubia nostra, per cursus himenaeos.
                                    </p>
                                </li>
                                <li className="flex gap-2 text-body">
                                    <span>3.</span>
                                    <p>
                                        <span className="text-bold font-semibold">Kimi to iru kyou ga zutto </span>{''}
                                        viverra, nec cursus leo ullamcorper nec cursus leo
                                        ullamcorper. Class aptent taciti sociosqu ad litora
                                        torquent per conubia nostra, per cursus himenaeos.
                                    </p>
                                </li>
                                <li className="flex gap-2 text-body">
                                    <span>4.</span>
                                    <p>
                                        <span className="text-bold font-semibold">Kiseki mitai de sakenda </span>{''}
                                        viverra, nec cursus leo ullamcorper nec cursus leo
                                        ullamcorper. Class aptent taciti sociosqu ad litora
                                        torquent per conubia nostra, per cursus himenaeos.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* REFS */}
                        <div className="flex flex-wrap items-center justify-between gap-10 mt-16">
                            <ul className="flex items-center gap-3">
                                <li className="text-body">Tags:</li>
                                <li className="text-black hover:text-primary ease-in duration-200">
                                    <Link href={'/category'}>#travel</Link>
                                </li>
                                <li className="text-black hover:text-primary ease-in duration-200">
                                    <Link href={'/category'}>#health</Link>
                                </li>
                                <li className="text-black hover:text-primary ease-in duration-200">
                                    <Link href={'/category'}>#technology</Link>
                                </li>
                            </ul>
                            <div className="flex items-center gap-3">
                                <p className="text-gray-500">Share This:</p>
                                <SocialColor />
                            </div>
                        </div>
                        {/* About */}
                        <div className="flex flex-wrap gap-8 mt-12">
                            <Link href={'#'} className="flex max-w-28 w-full h-28 rounded-full overflow-hidden">
                                <Image 
                                    src={'https://clarity-tailwind.preview.uideck.com/images/user-02.png'} 
                                    alt="user"
                                    width={120}
                                    height={120}
                                />
                            </Link>
                            <div className="max-w-[617px]">
                                <h4 className="font-medium text-black text-[22px] leading-7 mb-3">
                                    <Link href={'#'}>Author: Farhan Kebab</Link>
                                </h4>
                                <p>                                    
                                    Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                                </p>
                                <div className="mt-5">
                                    <Social />
                                </div>
                            </div>
                        </div>
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