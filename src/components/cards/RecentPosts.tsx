import Image from "next/image";
import Link from "next/link";

const postItems = [
    {
        image: 'https://clarity-tailwind.preview.uideck.com/images/blog-small-01.png',
        title: 'The Most Beautfiul Green Field on Earth',
        author: 'Joko Kopling',
        date: 'Sep 10, 2024'
    },
    {
        image: 'https://clarity-tailwind.preview.uideck.com/images/blog-small-02.png',
        title: 'Facts About Business That Will Help You Success',
        author: 'Ferdi Spakbor',
        date: 'Sep 10, 2024'
    },
    {
        image: 'https://clarity-tailwind.preview.uideck.com/images/blog-small-03.png',
        title: '5 Easy Ways You Can Turn Future Into Success',
        author: 'Gilang Spion',
        date: 'Sep 10, 2024'
    },
]

const RecentPosts: React.FC = () => {
    return (
        <div className="max-w-[370px] w-full rounded-[10px] border border-gray-300 p-4 sm:p-7 lg:p-10">
            <h4 className="font-semibold text-xl text-black mb-7">Recent Posts</h4>            
            <div className="flex flex-col gap-7 mb-4">
                { postItems.map((item: any) => (
                    <Link key={item.title} href={'#'} className="group flex gap-6">
                        <div className="max-w-[70px] w-full h-16 rounded-full">
                            <Image
                                src={`${item.image}`}
                                alt="blog"
                                width={70}
                                height={70}
                            />
                        </div>
                        <div>
                            <h5 className="font-medium text-sm text-body duration-200 ease-in mb-1.5 group-hover:text-primary">
                                {item.title}
                            </h5>
                            <div className="flex items-center gap-2 text-gray-300">
                                <p className="text-xs">{item.author}</p>
                                <span className="dots" />
                                <p className="text-xs">{item.date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default RecentPosts;