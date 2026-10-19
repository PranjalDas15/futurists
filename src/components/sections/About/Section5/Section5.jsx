import { aboutSection5 } from "../../../../assets/assets";
import Section5Intro from "./Section5Intro";
import TeamSlider from "./TeamSlider";

const Section5 = () => {
    const employees = aboutSection5.employees;

    if (!employees?.length) return null;

    return (
        <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <Section5Intro head={aboutSection5.head} body={aboutSection5.body} />
                <TeamSlider employees={employees} />
            </div>
        </section>
    );
};

export default Section5;