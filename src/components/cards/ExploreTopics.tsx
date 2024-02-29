import Link from "next/link";

const topicsItem = [
    { name: 'Celebration', length: '02'},
    { name: 'Culture', length: '05'},
    { name: 'Fashion', length: '12'},
    { name: 'Inspiration', length: '30'},
    { name: 'Lifestyle', length: '45'},
    { name: 'Political', length: '23'},
    { name: 'Trending', length: '03'},
]

const ExploreTopics: React.FC = () => {
    return (
        <div className="max-w-[370px] w-full rounded-[10px] border border-gray-300 p-4 sm:p-7 lg:p-10">
            <h4 className="font-semibold text-xl text-black mb-8">Explore Topics</h4>            
            <div className="flex flex-col gap-3">
                {topicsItem.map((item: any) => (
                    <Link key={item.name} href={'#'} className="group flex items-center justify-between gap-2">
                        <p className="ease-in duration-200 group-hover:text-black">{item.name}</p>
                        <span
                            className={`
                                flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-sm text-body
                                border border-gray-300 ease-in duration-200 group-hover:text-white group-hover:bg-black
                                group-hover:border-black
                            `}
                        >
                            {item.length}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ExploreTopics;