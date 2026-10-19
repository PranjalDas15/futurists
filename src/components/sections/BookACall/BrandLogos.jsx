
import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

const BrandLogos = ({ brands }) => {
    if (!brands?.length) return null;

    return (
        <div className="border-t border-violet-200/70 pt-7 transition-colors duration-300 dark:border-white/20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-white/70">
                Trusted brands & partners
            </p>

            <div className="relative overflow-hidden">
                {/* Left fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16 dark:from-primary" />

                {/* Right fade */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16 dark:from-primary" />

                <Marquee
                    gradient={false}
                    speed={30}
                    pauseOnHover
                >
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="mx-3 flex shrink-0 items-center justify-center sm:mx-4 sm:w-32 dark:border-white/15 dark:bg-white/95 dark:hover:border-sky-200/60"
                        >
                            <img
                                src={brand}
                                alt={`Partner brand ${index + 1}`}
                                className="h-[40px] w-[80px] object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default BrandLogos;
