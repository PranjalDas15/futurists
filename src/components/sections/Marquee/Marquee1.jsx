import MarqueeModule from "react-fast-marquee";
import { heroSection } from "../../../assets/assets";
import { Gem } from "lucide-react";

const Marquee = MarqueeModule.default;

const Marquee1 = () => {
    return (
        <section className="relative overflow-hidden border-y border-secondary/50 py-2">
            <Marquee
                autoFill
                speed={40}
                pauseOnHover
                gradient={false}
            >
                <div className="flex items-center gap-5 px-5 py-5 sm:gap-8 sm:py-7">
                    <p className="whitespace-nowrap  text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {heroSection.head2}
                    </p>

                    <Gem
                        size={24}
                        strokeWidth={1.6}
                        className="shrink-0 text-violet-500 sm:size-8 dark:text-sky-300"
                    />

                    <p className="whitespace-nowrap  text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {heroSection.head1}
                    </p>

                    <Gem
                        size={24}
                        strokeWidth={1.6}
                        className="shrink-0 text-sky-500 sm:size-8"
                    />
                </div>
            </Marquee>
        </section>
    );
};

export default Marquee1;