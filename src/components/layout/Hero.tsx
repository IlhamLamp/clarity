import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return(
        <section id="hero" className="rounded-b-[50px] relative overflow-hidden z-10 pb-14 pt-32">
            <div>
                <div className="absolute bottom-0 left-0 rounded-b-[50px] w-full h-full bg-gray-50" />
                <div className="hidden lg:block absolute bottom-0 left-0 rounded-b-[50px] w-full h-full">
                    <Image
                        src={'https://clarity-tailwind.preview.uideck.com/images/hero-bg.svg'}
                        alt="hero"
                        width={1349}
                        height={547}
                    />
                </div>
            </div>
            <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative z-1">
                <div className="flex flex-wrap gap-x-7 gap-y-9">
                    <div className={`
                        max-w-[1170px] w-full flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-11
                        bg-white shadow-sm rounded-xl p-4 lg:p-2
                    `}>
                        <div className="lg:max-w-[536px] w-full">
                            <Link href={'/blog-single'}>
                                <Image 
                                    src={'https://clarity-tailwind.preview.uideck.com/images/hero-01.png'} 
                                    alt="hero"
                                    width={536}
                                    height={320}
                                />
                            </Link>
                        </div>
                        <div className="lg:max-w-[540px] w-full">
                            <Link 
                                href={'/category'}
                                className="inline-flex text-primary bg-primary/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                            >
                                Lifestyle
                            </Link>
                            <h1 className="font-bold text-2xl xl:text-3xl text-black mb-4">
                                <Link href={'/blog-single'}>                                    
                                    Begin here to obtain a brief summary encompassing all the
                                    essential
                                </Link>
                            </h1>
                            <p className="max-w-[524px]">
                                This comprehensive post serves as your cheat-sheet to swiftly
                                familiarize yourself with Ghost. Packed with crucial...
                            </p>
                            <div className="flex items-center gap-2 mt-5 text-gray-500 ">
                                <Link href={'#'} className="flex items-center gap-3">
                                    <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                        <Image
                                            src={'https://clarity-tailwind.preview.uideck.com/images/user-01.png'}
                                            alt="user"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className="text-sm">Adrio Devid</p>
                                </Link>
                                <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"/>
                                <p className="text-sm">Sep 10, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className={`
                        lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 
                        rounded-xl p-2
                    `}>
                        <div className="lg:max-w-[238px] w-full">
                            <Link href={'/blog-single'}>
                                <Image
                                    src={'https://clarity-tailwind.preview.uideck.com/images/hero-02.png'}
                                    className={'w-full'}
                                    alt="hero"
                                    width={238}
                                    height={180}
                                />
                            </Link>
                        </div>
                        <div className="lg:max-w-[272px] w-full">
                            <Link href={'/category'}
                                className="inline-flex text-blue-500 bg-blue-500/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                            >
                                Technology
                            </Link>
                            <h2 className="font-semibold text-lg text-black mb-3">
                                <Link href={'/blog-single'}>
                                    14 Innovative Architectural Designs to Create a Vast
                                    Interior Space
                                </Link>
                            </h2>
                            <div className="flex items-center gap-2 mt-5 text-gray-500 ">
                                <Link href={'#'} className="flex items-center gap-3">
                                    <p className="text-sm">By Adrio Devid</p>
                                </Link>
                                <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"/>
                                <p className="text-sm">Sep 10, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className={`
                        lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 
                        rounded-xl p-2
                    `}>
                        <div className="lg:max-w-[238px] w-full">
                            <Link href={'/blog-single'}>
                                <Image
                                    src={'https://clarity-tailwind.preview.uideck.com/images/hero-03.png'}
                                    className={'w-full'}
                                    alt="hero"
                                    width={238}
                                    height={180}
                                />
                            </Link>
                        </div>
                        <div className="lg:max-w-[272px] w-full">
                            <Link href={'/category'}
                                className="inline-flex text-green-500 bg-green-500/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                            >
                                Travel
                            </Link>
                            <h2 className="font-semibold text-lg text-black mb-3">
                                <Link href={'/blog-single'}>
                                    14 Innovative Architectural Designs to Create a Vast
                                    Interior Space
                                </Link>
                            </h2>
                            <div className="flex items-center gap-2 mt-5 text-gray-500 ">
                                <Link href={'#'} className="flex items-center gap-3">
                                    <p className="text-sm">By Adrio Devid</p>
                                </Link>
                                <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"/>
                                <p className="text-sm">Sep 10, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}