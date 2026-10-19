import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Bot,
    Clapperboard,
    Code2,
    Fingerprint,
    Megaphone,
    Palette,
} from "lucide-react";

import ServiceSlide from "./ServiceSlide";

const icons = [
    Fingerprint,
    Megaphone,
    Code2,
    Palette,
    Clapperboard,
    Bot,
];

const ServiceSlider = ({ services = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!services.length) return null;

    const activeService = services[activeIndex];
    const Icon = icons[activeIndex % icons.length];

    const goTo = (index) => {
        setActiveIndex((index + services.length) % services.length);
    };

    return (
        <div className="mt-12 sm:mt-16">
            {/* Main slider */}
            <div className="relative overflow-hidden rounded-[28px] border border-secondary/80 bg-primary/75 shadow-xl shadow-violet-950/[0.04] backdrop-blur-2xl sm:rounded-[36px]">
                {/* Ambient gradient */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-violet-500/[0.12] blur-[100px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-sky-500/[0.10] blur-[100px]"
                />

                <div className="relative grid grid-cols-1 lg:h-[520px] lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left visual panel */}
                    <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden border-b border-secondary/60 p-8 lg:h-full lg:min-h-0 lg:border-b-0 lg:border-r">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.07] via-transparent to-sky-500/[0.08]" />

                        {/* Orbital rings */}
                        <div className="absolute size-[220px] rounded-full border border-violet-400/20 sm:size-[280px] lg:size-[330px]" />

                        <div className="absolute size-[170px] rounded-full border border-dashed border-sky-400/30 sm:size-[220px] lg:size-[260px]" />

                        <div className="absolute size-[120px] rounded-full border border-indigo-400/20 sm:size-[160px] lg:size-[190px]" />

                        {/* Central icon */}
                        <div
                            key={activeIndex}
                            className="relative flex size-24 animate-[serviceEnter_500ms_ease-out] items-center justify-center rounded-[28px] border border-violet-400/30 bg-gradient-to-br from-violet-500/15 via-indigo-500/10 to-sky-500/20 text-violet-600 shadow-[0_0_80px_rgba(139,92,246,0.12)] backdrop-blur-xl dark:text-sky-300 sm:size-28 sm:rounded-[32px]"
                        >
                            <Icon size={44} strokeWidth={1.3} />
                        </div>

                        {/* Orbital points */}
                        <div className="absolute left-[22%] top-[27%] size-2 rounded-full bg-violet-400 shadow-[0_0_18px_5px_rgba(139,92,246,0.25)]" />

                        <div className="absolute bottom-[25%] right-[23%] size-2 rounded-full bg-sky-400 shadow-[0_0_18px_5px_rgba(56,189,248,0.25)]" />

                        <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-primary/40 sm:bottom-7 sm:left-7">
                            Futurists / Services
                        </span>

                        <span className="absolute right-5 top-5 font-anton text-sm text-text-primary/35 sm:right-7 sm:top-7">
                            {String(activeIndex + 1).padStart(2, "0")} /{" "}
                            {String(services.length).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Right content panel */}
                    <div className="flex flex-col p-6 sm:p-10 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:p-10 xl:p-12">
                        <div className="flex-1">
                            <ServiceSlide
                                key={activeIndex}
                                service={activeService}
                                index={activeIndex}
                            />
                        </div>

                        {/* Fixed-position navigation */}
                        <div className="mt-8 flex shrink-0 items-center justify-between border-t border-secondary/70 pt-5">
                            <div className="flex items-center gap-2">
                                {services.map((service, index) => (
                                    <button
                                        key={service.head}
                                        type="button"
                                        aria-label={`Go to ${service.head}`}
                                        aria-current={
                                            index === activeIndex
                                                ? "true"
                                                : undefined
                                        }
                                        onClick={() => goTo(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                                ? "w-9 bg-gradient-to-r from-violet-500 to-sky-500"
                                                : "w-3 bg-text-primary/20 hover:bg-text-primary/40"
                                            }`}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => goTo(activeIndex - 1)}
                                    aria-label="Previous service"
                                    className="flex size-10 items-center justify-center rounded-full border border-secondary text-text-primary/70 transition-all hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-500 dark:hover:text-sky-300"
                                >
                                    <ArrowLeft size={17} />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => goTo(activeIndex + 1)}
                                    aria-label="Next service"
                                    className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 transition-all hover:scale-105 hover:shadow-violet-500/30"
                                >
                                    <ArrowRight size={17} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service selector */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {services.map((service, index) => {
                    const isActive = index === activeIndex;
                    const ServiceIcon = icons[index % icons.length];

                    return (
                        <button
                            key={service.head}
                            type="button"
                            onClick={() => goTo(index)}
                            aria-pressed={isActive}
                            className={`group flex min-h-[76px] items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-300 sm:flex-col sm:items-start sm:gap-2 sm:p-4 ${isActive
                                    ? "border-violet-400/50 bg-violet-500/[0.08] shadow-sm shadow-violet-500/[0.05]"
                                    : "border-secondary/70 bg-primary/50 hover:border-violet-400/30 hover:bg-primary/80"
                                }`}
                        >
                            <span
                                className={`flex size-8 shrink-0 items-center justify-center rounded-xl transition-colors ${isActive
                                        ? "bg-gradient-to-br from-violet-500 to-indigo-600 text-white"
                                        : "bg-text-primary/[0.04] text-text-primary/55 group-hover:text-violet-500 dark:group-hover:text-sky-300"
                                    }`}
                            >
                                <ServiceIcon size={16} />
                            </span>

                            <span
                                className={`text-xs font-semibold leading-5 sm:text-sm ${isActive
                                        ? "text-text-primary"
                                        : "text-text-primary/60"
                                    }`}
                            >
                                {service.head}
                            </span>
                        </button>
                    );
                })}
            </div>

            <style>{`
                @keyframes serviceEnter {
                    from {
                        opacity: 0;
                        transform: translateY(10px) scale(0.94);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-\\[serviceEnter_500ms_ease-out\\] {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServiceSlider;