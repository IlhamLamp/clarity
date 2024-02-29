import Link from "next/link";

const NewsletterCard: React.FC = () => {
    return (
        <div className="max-w-[370px] w-full rounded-[10px] border border-gray-300 p-4 sm:p-7 lg:p-10">
            <h4 className="font-semibold text-xl text-dark mb-7">Newsletter</h4>
            <p className="font-medium text-lg mb-5">Join 70,000 subscribers!</p>
            <form>
                <input id="email" type="email" name="email" placeholder="Enter your email"
                    className={`
                        rounded-md border border-gray-300 bg-white placeholder:text-gray-300 w-full
                        py-3.5 px-5 outline-none text-center focus:shadow-black focus:ring-2 
                        focus:ring-black-4/20 focus:border-transparent
                    `}
                />
                <button
                    className={`
                        font-medium rounded-md text-white bg-black flex justify-center text-center 
                        w-full py-3 px-5 hover:opacity-90 transition-all duration-200 mt-4
                    `}
                >
                    Subscribe Now
                </button>
            </form>
            <p className="text-sm mt-5 text-center">
                <span className="text-gray-500">By signing up, you agree to our </span>
                <Link href={'#'} className="text-black">Privacy Policy</Link>
            </p>
        </div>
    )
}

export default NewsletterCard;