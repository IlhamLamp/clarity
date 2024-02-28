import ScrollToTop from "react-scroll-up";
import { ChevronUp } from "../icons/Chevron";

const ScrollToTopButton: React.FC = () => {
    return (
        <div className="relative z-[300]">
            <ScrollToTop showUnder={160}>
                <ChevronUp />
            </ScrollToTop>
        </div>
    )
}

export default ScrollToTopButton;