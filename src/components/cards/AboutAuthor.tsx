import Image from "next/image";
import Link from "next/link";
import { Social } from "../icons/Social";

const AboutAuthor: React.FC = () => {
    return (
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
    )
}

export default AboutAuthor;