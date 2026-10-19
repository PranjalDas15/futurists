import { ArrowUpRight } from "lucide-react";

const Section4Item = ({ card, index }) => {
    return (
        <article className="group relative grid grid-cols-[32px_1fr_32px] items-start gap-3 border-b border-secondary/60 py-5 transition-colors duration-300 hover:bg-primary/30 sm:grid-cols-[45px_1fr_36px] sm:items-center sm:gap-5 sm:py-6 md:grid-cols-[55px_0.8fr_1.2fr_36px] md:gap-6">
            <span className="pt-1 font-mono text-xs tracking-widest text-text-primary/40 transition-colors duration-300 group-hover:text-sky-400 md:text-sm">
                {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-base font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-sky-400 sm:text-lg md:text-xl">
                {card.head}
            </h3>

            <p className="col-start-2 row-start-2 text-sm leading-6 text-text-primary/60 sm:col-start-2 sm:row-start-2 md:col-start-3 md:row-start-1 md:pr-2 md:leading-7">
                {card.body}
            </p>

            <div className="col-start-3 row-start-1 flex size-8 items-center justify-center rounded-full border border-secondary/70 text-text-primary/50 transition-all duration-300 group-hover:border-sky-400/40 group-hover:bg-sky-400/10 group-hover:text-sky-400 sm:size-9 md:col-start-4 md:row-start-1">
                <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            </div>

            <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-gradient-to-r from-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
        </article>
    );
};

export default Section4Item;