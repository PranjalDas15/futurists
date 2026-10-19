import { aboutSection6 } from "../../../../assets/assets";
import Section6Intro from "./Section6Intro";
import ServiceSlider from "./ServiceSlider";

const Section6 = () => {
    return (
        <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            {/* Ambient lighting */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -left-40 top-1/4 size-[450px] rounded-full bg-violet-500/10 blur-[120px] dark:bg-violet-500/15" />
                <div className="absolute -right-40 bottom-0 size-[450px] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/15" />
                <div
                    className="absolute inset-0 opacity-20 dark:opacity-15"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(129,140,248,0.5) 0.7px, transparent 0.7px)",
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl">
                <Section6Intro head={aboutSection6.head} />
                <ServiceSlider services={aboutSection6.cards} />
            </div>
        </section>
    );
};

export default Section6;