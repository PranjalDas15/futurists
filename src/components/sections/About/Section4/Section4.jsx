import { aboutSection4 } from "../../../../assets/assets";
import Section4Intro from "./Section4Intro";
import Section4List from "./Section4List";

const Section4 = () => {
    return (
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-24">
            <div className="relative mx-auto max-w-7xl">
                <Section4Intro
                    head={aboutSection4.head}
                    body={aboutSection4.body}
                />

                <Section4List cards={aboutSection4.cards} />
            </div>
        </section>
    );
};

export default Section4;