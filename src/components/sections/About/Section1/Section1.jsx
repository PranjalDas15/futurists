import { aboutSection1 } from "../../../../assets/assets";
import Section1Intro from "./Section1Intro";
import Section1Cards from "./Section1Cards";

const Section1 = () => {
    return (
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20">
            <div className="relative mx-auto max-w-7xl">
                <Section1Intro
                    head1={aboutSection1.head1}
                    head2={aboutSection1.head2}
                />

                <Section1Cards cards={aboutSection1.cards} />
            </div>
        </section>
    );
};

export default Section1;