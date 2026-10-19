import { ArrowUpRight, Check } from "lucide-react";

const ServiceSlide = ({ service, index }) => {
    return (
        <div className="flex h-full flex-col animate-[serviceEnter_400ms_ease-out]">
            <div className="mb-4 flex shrink-0 items-center gap-2">
                <span className="size-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-text-primary/50 sm:text-xs">
                    Service {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            {/* Consistent title area */}
            <div className="min-h-[76px] shrink-0 sm:min-h-[96px]">
                <h3 className="max-w-xl text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl xl:text-5xl">
                    {service.head}
                </h3>
            </div>

            {/* Consistent description area */}
            <div className="mt-4 min-h-[84px] shrink-0">
                <p className="max-w-lg text-sm leading-7 text-text-primary/65 sm:text-base sm:leading-8">
                    {service.body}
                </p>
            </div>

            {/* Consistent capsules area */}
            <div className="mt-5 min-h-[104px] shrink-0">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-primary/40">
                    What we can do
                </p>

                <div className="flex flex-wrap gap-2">
                    {service.capsules.map((capsule) => (
                        <span
                            key={capsule}
                            className="inline-flex items-center gap-2 rounded-full border border-secondary/80 bg-primary/70 px-3 py-2 text-xs font-medium text-text-primary/75 transition-colors hover:border-violet-400/40"
                        >
                            <Check
                                size={12}
                                className="shrink-0 text-violet-500 dark:text-sky-300"
                            />
                            {capsule}
                        </span>
                    ))}
                </div>
            </div>

            {/* CTA stays at the bottom */}
            <div className="mt-auto pt-5">
                <a
                    href="#book-a-call"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/30"
                >
                    Let&apos;s work together

                    <span className="flex size-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={15} />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default ServiceSlide;