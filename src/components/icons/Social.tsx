import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from "react-icons/fa";

const Social: React.FC = () => {
    return (
        <div className="flex items-center gap-2 text-gray-500">
            <Link href={'#'} className="social-hover"><FaFacebookF /></Link>
            <Link href={'#'} className="social-hover"><FaTwitter /></Link>
            <Link href={'#'} className="social-hover"><FaLinkedinIn /></Link>
            <Link href={'#'} className="social-hover"><FaPinterest /></Link>
        </div>
    )
}

export default Social;