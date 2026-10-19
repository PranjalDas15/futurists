import { aboutSection1 } from "../../../../assets/assets";
import Section1Intro from "./Section1Intro";
import Section1Cards from "./Section1Cards";

const Section1 = () => {
    return (
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20">
            {/* Background accents */}
            <div className="pointer-events-none absolute right-0 top-20 size-[280px] rounded-full bg-blue-500/[0.07] blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 size-[250px] rounded-full bg-purple-500/[0.08] blur-[90px]" />

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