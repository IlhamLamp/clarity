import Image from "next/image";
import Link from "next/link";

const ContentQuote: React.FC = () => {
    return (
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
    )
}

export default ContentQuote;