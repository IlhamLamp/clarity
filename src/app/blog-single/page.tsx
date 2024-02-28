import CategoryButton from "@/components/buttons/CategoryButton";
import VieawAllButton from "@/components/buttons/ViewAllButton";
import Image from "next/image";
import Link from "next/link";

export default function BlogSingle() {
    return (
        <section className="pt-20 pb-16">
            <div className="max-w-[1030px] px-4 lg:px-0 mx-auto">
                {/* HEADER CONTENT */}
                <div className="max-w[770px] pt-10 mx-auto text-center">
                    <CategoryButton textColor={"text-primary"} bgColor={"bg-blue-50"} href={"/category"} categoryName={"Technology"} />
                    <h1 className="max-w-2xl mx-auto lg:mt-1 mb-5 lg:leading-normal font-bold text-2xl lg:text-4xl text-black">
                        Start here for a quick overview of everything you need to know
                    </h1>
                    <p className="max-w-3xl mx-auto lg:leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec mattis aliquam urna
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-7">
                        <div className="flex rounded-full overflow-hidden">
                            <Image
                                src={'https://cdn-icons-png.flaticon.com/256/149/149071.png'}
                                alt="user"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="text-left">
                            <h4 className="font-medium text-lg mb-0.5">Adrio Devid</h4>
                            <div className="flex items-center gap-1 text-md text-gray-500">
                                <p>Aug 28, 2025</p>
                                <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
                                <p>1 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* IMAGE CONTENT */}
                <Image
                    src={'https://clarity-tailwind.preview.uideck.com/images/blog-single-01.png'}
                    alt="blog"
                    width={1030}
                    height={550}
                    className="mt-10 mb-11"
                />
                <div className="max-w-[770px] mx-auto">
                    {/*  */}
                    <div className="">
                        <p className="mb-5 text-body">
                            As discussed in the introduction post, one of the best things about Ghost is 
                            just how much you can customize to turn your site into something unique. 
                            Everything about your layout and design can be changed, so you're not stuck 
                            with yet another clone of a social network profile.
                        </p>
                        <p className="mb-5 font-semibold text-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam at justo 
                            ullamcorper vulputate. Donec mattis aliquam urna, sed placerat dolor volutpat vel. 
                            Maecenas posuere sem purus, quis feugiat.
                        </p>
                        <p className="mb-5 text-body">
                            Adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec mattis aliquam urna, 
                            sed placerat dolor volutpat vel. Maecenas quis feugiat.
                        </p>
                    </div>
                    {/*  */}
                    <div className="mt-12">
                        <h3 className="font-semibold text-2xl text-black mb-6">
                            Quisque rutrum varius lobortis
                        </h3>
                        <p className="text-body">
                            As discussed in the introduction post, one of the best things about Ghost is just 
                            how much you can customize to turn your site into something unique. Everything about 
                            your layout and design can be changed, so you're not stuck with yet another clone of a 
                            social network profile.
                        </p>
                        <ul className="flex flex-col gap-3 mt-7">
                            <li className="flex gap-5 text-body">
                                <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-black/50 mt-[9px]"></span>
                                <p>
                                    <span className="text-black font-semibold">Introduction post,</span>
                                    {' '}
                                    one of the best things about Ghost is just how much you can netus et malesuada fames 
                                    ac turpis egestas. Fusce congue dui nec dui lobortis maximus.
                                </p>
                            </li>
                            <li className="flex gap-5 text-body">
                                <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-black/50 mt-[9px]"></span>
                                <p>
                                    <span className="text-black font-semibold">Sed ullamcorper,</span>
                                    {' '}
                                    dui at risus viverra, nec cursus leo ullamcorper. Class aptent taciti sociosqu ad litora 
                                    torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </li>
                        </ul>
                        <div className="border-l-[3px] border-gray-200 bg-gray-50 py-5 px-8 mt-7">
                            <p className="font-bold italic text-black">
                                “Success is not a destination. Success is a decision you make
                                on a daily, hourly, and even moment-to-moment basis.” —
                                Nicolas Cole
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-12">
                        <h3 className="font-semibold text-2xl text-black mb-6">
                            One of the best things
                        </h3>
                        <p className="text-body">
                            As discussed in the introduction post, one of the best things about Ghost is just 
                            how much you can customize to turn your site into something unique. Everything about 
                            your layout and design can be changed, so you're not stuck with yet another clone of a 
                            social network profile.
                        </p>
                        <Image
                            src={'https://clarity-tailwind.preview.uideck.com/images/blog-single-04.png'}
                            width={770}
                            height={380}
                            alt="blog"
                            className="my-8"
                        />
                        <p className="text-body">
                            As discussed in the introduction post, one of the best things about Ghost is just 
                            how much you can customize to turn your site into something unique. Everything about 
                            your layout and design can be changed, so you're not stuck with yet another clone of a 
                            social network profile.
                        </p>
                    </div>
                    {/* View ALL Button */}
                    <div className="mt-10">
                        <VieawAllButton />
                    </div>
                    <div className="border-t border-gray-300 pt-10 mt-12">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-9">
                            <div className="max-w-[133px] w-full h-[133px] rounded-full flex items-center justify-center border border-gray-300">
                                <Link href={'#'} className="max-w-[97px] w-full h-[97px] shadow-img rounded-full overflow-hidden">
                                    <Image 
                                        src={'https://clarity-tailwind.preview.uideck.com/images/user-01.png'}
                                        alt="author" width={97} height={97}
                                    />
                                </Link>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-black mb-3">Adrio Devid</h4>
                                <p className="text-body">
                                    Breakfast procuring no end happiness allowance assurance
                                    frank. Met simplicity nor difficulty unreserved who.
                                </p>
                                <Link href={'#'} className="flex text-sm text-primary mt-4">View profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}