import { Sparkles } from "lucide-react";

const Section6Intro = ({ head }) => {
    return (
        <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary bg-primary/70 px-4 py-2 backdrop-blur-xl">
                <Sparkles
                    size={14}
                    className="text-violet-500 dark:text-sky-300"
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-text-primary/65 sm:text-xs">
                    Our expertise
                </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                {head}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-primary/60 sm:text-base">
                Six disciplines. One connected vision. Everything your brand
                needs to move forward.
            </p>
        </div>
    );
};

export default Section6Intro;