
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-secondary/60 bg-primary/40 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/[0.06] sm:p-6">

            <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-violet-500/[0.07] blur-3xl transition-opacity duration-300 group-hover:bg-violet-500/[0.12]" />

            <div className="relative mb-5 flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl border border-violet-500/15 bg-gradient-to-br from-violet-500/10 to-sky-500/10 text-violet-500 dark:text-sky-300">
                    <Quote size={19} strokeWidth={1.7} />
                </div>

                <span className="font-mono text-[10px] tracking-[0.18em] text-text-primary/35">
                    / {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            <blockquote className="relative flex-1">
                <p className="text-sm leading-7 text-text-primary/75 sm:text-[15px]">
                    “{testimonial.comment}”
                </p>
            </blockquote>

            <div className="my-5 h-px bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent" />

            <div className="relative flex items-center gap-3">
                <div className="size-11 shrink-0 overflow-hidden rounded-full border border-secondary/70 bg-primary">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-text-primary">
                        {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs text-text-primary/45">
                        Verified client feedback
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-5 right-5 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-400 transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6" />
        </article>
    );
};

export default TestimonialCard;
