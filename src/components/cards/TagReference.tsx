import Link from "next/link";
import { SocialColor } from "../icons/Social";

const TagReference: React.FC = () => {
    return (
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
    )
}

export default TagReference;