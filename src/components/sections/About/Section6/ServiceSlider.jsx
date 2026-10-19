
import { useState } from "react";
import ServiceSlide from "./ServiceSlide";

const ServiceSlider = ({ services = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!services.length) return null;

    const goTo = (index) => {
        setActiveIndex((index + services.length) % services.length);
    };

    const getOffset = (index) => {
        let offset = index - activeIndex;

        if (offset > services.length / 2) {
            offset -= services.length;
        }

        if (offset < -services.length / 2) {
            offset += services.length;
        }

        return offset;
    };

    return (
        <div className="mt-12 sm:mt-16">
            <div className="relative">
                <div className="relative grid overflow-hidden py-4">
                    {services.map((service, index) => {
                        const offset = getOffset(index);
                        const isActive = offset === 0;
                        const isVisible = Math.abs(offset) <= 1;

                        return (
                            <div
                                key={service.head}
                                className={`
                                    relative col-start-1 row-start-1
                                    w-[88%] justify-self-center
                                    sm:w-[78%]
                                    lg:w-[62%]
                                    xl:w-[58%]
                                    ${isActive ? "cursor-default" : "cursor-pointer"}
                                `}
                                style={{
                                    transform: `
                                        translateX(${offset * 40}%)
                                        scale(${isActive ? 1 : 0.60})
                                    `,
                                    opacity: isActive
                                        ? 1
                                        : isVisible
                                            ? 0.5
                                            : 0,
                                    zIndex: isActive ? 20 : 10,
                                    pointerEvents: isVisible ? "auto" : "none",
                                    transition:
                                        "transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                                }}
                                onClick={() => {
                                    if (!isActive && isVisible) {
                                        goTo(index);
                                    }
                                }}
                            >
                                <ServiceSlide
                                    service={service}
                                    index={index}
                                />

                                {!isActive && isVisible && (
                                    <div
                                        className={`
                                            pointer-events-none absolute inset-0 z-10
                                            rounded-3xl
                                            ${offset < 0
                                                ? "bg-gradient-to-l from-primary/0 via-primary/30 to-primary"
                                                : "bg-gradient-to-r from-primary/0 via-primary/30 to-primary"
                                            }
                                        `}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {services.map((service, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <button
                            key={service.head}
                            type="button"
                            onClick={() => goTo(index)}
                            className={`
                                group flex min-h-[76px] items-center gap-3
                                rounded-2xl border px-3 py-3 text-left
                                transition-all duration-300
                                sm:flex-col sm:items-start sm:gap-2 sm:p-4
                                ${isActive
                                    ? "border-violet-400/50 bg-violet-500/[0.08] shadow-sm shadow-violet-500/[0.05]"
                                    : "border-secondary/70 bg-primary/50 hover:border-violet-400/30 hover:bg-primary/80"
                                }
                            `}
                        >
                            <span
                                className={`
                                    flex size-8 shrink-0 items-center justify-center
                                    rounded-xl transition-colors
                                    ${isActive
                                        ? "bg-gradient-to-br from-violet-500 to-indigo-600 text-white"
                                        : "bg-text-primary/[0.04] text-text-primary/55 group-hover:text-violet-500"
                                    }
                                `}
                            >
                                <span className="text-xs font-semibold">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </span>

                            <span
                                className={`
                                    text-xs font-semibold leading-5 sm:text-sm
                                    ${isActive
                                        ? "text-text-primary"
                                        : "text-text-primary/60"
                                    }
                                `}
                            >
                                {service.head}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceSlider;
