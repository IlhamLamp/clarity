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

const SocialColor: React.FC = () => {
    return (
        <div className="flex items-center gap-2">
            <Link href={'#'} className={`
                flex items-center justify-center w-8 h-8 rounded-full
                ease-in duration-200 hover:bg-opacity-95
            `}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g fill="#364e8f" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
                </svg>
            </Link>
            <Link href={'#'} className={`
                flex items-center justify-center w-7 h-7 rounded-full
                ease-in duration-200 hover:bg-opacity-95
            `}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g fill="#52a2ec" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM36.237,20.524c0.01,0.236 0.016,0.476 0.016,0.717c0,7.318 -5.573,15.759 -15.762,15.759c-3.128,0 -6.041,-0.917 -8.491,-2.489c0.433,0.052 0.872,0.077 1.321,0.077c2.596,0 4.985,-0.884 6.879,-2.37c-2.424,-0.044 -4.468,-1.649 -5.175,-3.847c0.339,0.065 0.686,0.1 1.044,0.1c0.505,0 0.995,-0.067 1.458,-0.195c-2.532,-0.511 -4.441,-2.747 -4.441,-5.432c0,-0.024 0,-0.047 0,-0.07c0.747,0.415 1.6,0.665 2.509,0.694c-1.488,-0.995 -2.464,-2.689 -2.464,-4.611c0,-1.015 0.272,-1.966 0.749,-2.786c2.733,3.351 6.815,5.556 11.418,5.788c-0.095,-0.406 -0.145,-0.828 -0.145,-1.262c0,-3.059 2.48,-5.539 5.54,-5.539c1.593,0 3.032,0.672 4.042,1.749c1.261,-0.248 2.448,-0.709 3.518,-1.343c-0.413,1.292 -1.292,2.378 -2.437,3.064c1.122,-0.136 2.188,-0.432 3.183,-0.873c-0.742,1.111 -1.681,2.088 -2.762,2.869z"></path></g></g>
                </svg>
            </Link>
            <Link href={'#'} className={`
                flex items-center justify-center w-7 h-7 rounded-full
                ease-in duration-200 hover:bg-opacity-95
            `}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g fill="#b1151d" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.68213,0 -23,10.31787 -23,23c0,9.88416 6.26758,18.33026 15.03638,21.57697c-0.25256,-2.25159 -0.21295,-5.93903 0.2038,-7.72437c0.39026,-1.677 2.52124,-10.68713 2.52124,-10.68713c0,0 -0.64331,-1.28833 -0.64331,-3.1911c0,-2.99017 1.73242,-5.22119 3.88983,-5.22119c1.83496,0 2.71979,1.37762 2.71979,3.0282c0,1.8457 -1.17346,4.60266 -1.78125,7.15784c-0.5069,2.14093 1.07336,3.88654 3.18365,3.88654c3.82123,0 6.75848,-4.0296 6.75848,-9.84534c0,-5.14758 -3.698,-8.74719 -8.97955,-8.74719c-6.11676,0 -9.70728,4.58856 -9.70728,9.33099c0,1.84735 0.71118,3.82867 1.6001,4.90698c0.17529,0.21332 0.20093,0.39941 0.14886,0.61603c-0.1629,0.67889 -0.52509,2.13928 -0.59705,2.4386c-0.09344,0.39447 -0.31177,0.47632 -0.71863,0.28693c-2.68579,-1.25031 -4.3645,-5.17566 -4.3645,-8.32959c0,-6.78156 4.92682,-13.0108 14.20654,-13.0108c7.45886,0 13.25476,5.31384 13.25476,12.41791c0,7.41003 -4.67291,13.37299 -11.15686,13.37299c-2.17889,0 -4.22638,-1.13202 -4.92676,-2.46918c0,0 -1.07831,4.10486 -1.34045,5.11121c-0.45245,1.74042 -2.38928,5.34601 -3.36157,6.9837c2.22424,0.71851 4.59357,1.11102 7.05377,1.11102c12.68262,0 23,-10.31738 23,-23c0,-12.68213 -10.31738,-23 -23,-23z"></path></g></g>
                </svg>
            </Link>
        </div>
    )
}

export { Social, SocialColor };