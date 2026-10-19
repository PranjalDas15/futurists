
import { bookACallSection } from "../../../assets/assets";
import BookCallBenefits from "./BookACallBenefits";
import BookCallForm from "./BookACallForm";
import BookCallIntro from "./BookACallIntro";
import BrandLogos from "./BrandLogos";

const BookACall = () => {
    const { head1, head2, body, benefits } = bookACallSection;

    return (
        <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28 xl:px-24">
            <div className="relative mx-auto w-full max-w-7xl">
                <BookCallIntro head={head1} body={body} />

                <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
                    <div className="flex min-w-0 flex-col gap-7 sm:gap-8">
                        <BookCallBenefits benefits={benefits} />
                        <BrandLogos brands={benefits.brands} />
                    </div>

                    <div className="w-full min-w-0">
                        <BookCallForm head={head2} placeholder={benefits.placeholder} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookACall;
