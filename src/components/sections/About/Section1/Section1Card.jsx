const Section1Card = ({ card, index }) => {
    const isFeatured = index === 1;

    return (
        <div
            className={`group relative flex min-h-[160px] flex-col overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 sm:min-h-[190px] sm:p-5 ${isFeatured
                ? "border-transparent bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 text-white shadow-lg shadow-indigo-950/20"
                : "border-secondary/60 bg-primary/30 backdrop-blur-xl hover:border-sky-400/40 hover:bg-primary/50"
                }`}
        >
            {/* Decorative glow */}
            <div
                className={`pointer-events-none absolute -right-8 -top-8 size-24 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${isFeatured
                    ? "bg-white/20 opacity-50"
                    : "bg-sky-400/10 opacity-60"
                    }`}
            />

            {/* Card header */}
            <div className="relative flex items-center justify-between">
                <span
                    className={`font-mono text-[10px] tracking-[0.16em] ${isFeatured
                        ? "text-white/60"
                        : "text-text-primary/40"
                        }`}
                >
                    / {String(index + 1).padStart(2, "0")}
                </span>

                <span
                    className={`flex size-7 items-center justify-center rounded-full border transition-transform duration-300 group-hover:rotate-45 ${isFeatured
                        ? "border-white/30 bg-white/10"
                        : "border-secondary/70 bg-primary/40"
                        }`}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                    >
                        <path
                            d="M7 17 17 7M7 7h10v10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>

            {/* Card content */}
            <div className="relative mt-auto pt-5">
                <h2
                    className={`text-2xl font-bold tracking-tight sm:text-3xl ${isFeatured
                        ? "text-white"
                        : "bg-gradient-to-r from-text-primary to-text-primary/60 bg-clip-text text-transparent"
                        }`}
                >
                    {card.data}
                </h2>

                <div
                    className={`my-2 h-px w-full ${isFeatured
                        ? "bg-white/20"
                        : "bg-secondary/60"
                        }`}
                />

                <h3 className="mb-1.5 text-sm font-semibold tracking-tight sm:text-base">
                    {card.head}
                </h3>

                <p
                    className={`text-xs leading-5 sm:text-sm ${isFeatured
                        ? "text-white/75"
                        : "text-text-primary/60"
                        }`}
                >
                    {card.body}
                </p>
            </div>

            {/* Bottom accent */}
            <div
                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 sm:left-5 sm:right-5 ${isFeatured
                    ? "bg-white/70"
                    : "bg-gradient-to-r from-sky-400 to-violet-500"
                    }`}
            />
        </div>
    );
};

export default Section1Card;