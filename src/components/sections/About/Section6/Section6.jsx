import { aboutSection6 } from "../../../../assets/assets";
import Section6Intro from "./Section6Intro";
import ServiceSlider from "./ServiceSlider";

const Section6 = () => {
    return (
        <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <Section6Intro head={aboutSection6.head} />
                <ServiceSlider services={aboutSection6.cards} />
            </div>
        </section>
    );
};

export default Section6;