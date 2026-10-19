
import Section3Intro from "./Section3Intro";
import Section3Cards from "./Section3Cards";
import { aboutSection3 } from "../../../../assets/assets";

const Section3 = () => {
    return (
        <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <Section3Intro
                    head={aboutSection3.head}
                    body={aboutSection3.body}
                />
                <Section3Cards cards={aboutSection3.cards} />
            </div>
        </section>
    );
};

export default Section3;