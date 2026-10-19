
import Section2Intro from "./Section2Intro";
import Section2Cards from "./Section2Cards";
import { aboutSection2 } from "../../../../assets/assets";

const Section2 = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 px-6 py-20 text-white md:px-12 md:py-24 lg:px-24">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-32 top-20 size-[400px] rounded-full bg-white/[0.08] blur-[120px]" />

            <div className="pointer-events-none absolute -bottom-40 -right-20 size-[450px] rounded-full bg-sky-300/[0.10] blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">
                <Section2Intro
                    head={aboutSection2.head}
                    body={aboutSection2.body}
                />

                <Section2Cards cards={aboutSection2.cards} />
            </div>
        </section>
    );
};

export default Section2;