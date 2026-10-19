
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const scrollToBookCall = () => {
    const bookCallSection = document.getElementById("book-a-call");

    if (!bookCallSection) {
        console.warn('Could not find section with id="book-a-call"');
        return;
    }

    const smoother = ScrollSmoother.get();

    if (smoother) {
        smoother.scrollTo(bookCallSection, true, "top top");
    } else {
        bookCallSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};
