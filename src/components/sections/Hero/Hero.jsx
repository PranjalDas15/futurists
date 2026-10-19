import { ArrowDownRight, Sparkles } from "lucide-react";
import { heroSection } from "../../../assets/assets";
import Button from "../../ui/Button";
import { scrollToBookCall } from "../../../lib/wrapers/actions/actions";

const Hero = () => {
    return (
        <section id="hero" className="relative isolate overflow-hidden px-5 pb-10 pt-14 sm:px-8 sm:pt-20 md:px-12 md:pt-24 lg:px-20 lg:pt-28">
            {/* Background glows */}
            <div className="pointer-events-none absolute left-1/2 top-10 -z-10 size-[300px] -translate-x-1/2 rounded-full bg-violet-500/[0.12] blur-[110px] sm:size-[450px]" />
            <div className="pointer-events-none absolute right-0 top-1/3 -z-10 size-[250px] rounded-full bg-sky-500/[0.10] blur-[100px] sm:size-[350px]" />

            <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

                <h1 className="max-w-6xl font-momo text-4xl font-black leading-[1.08] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px]">
                    {heroSection.head1}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-7 text-text-primary/65 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
                    {heroSection.body}
                </p>
                <div className="mt-8">
                    <Button
                        onClick={scrollToBookCall}
                        name="Book a call"
                        className="w-full sm:w-[200px]"
                    />
                </div>

                <p className="mt-8 max-w-xl text-xs leading-6 text-text-primary/45 sm:text-sm">
                    {heroSection.hero1}
                </p>
            </div>
        </section>
    );
};

export default Hero;