const Section2Card = ({ card, index }) => {
    return (
        <div className="group relative min-h-[200px] overflow-hidden rounded-2xl border border-white/20 bg-white/[0.09] p-5 shadow-lg shadow-indigo-950/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/40 hover:bg-white/[0.15] md:min-h-[215px] md:p-6">
            {/* Top accent */}
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-sky-200 via-white to-violet-200 transition-all duration-500 group-hover:w-full" />

            {/* Card header */}
            <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-white/60">
                    / {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex size-7 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/20">
                    <span className="size-1.5 rounded-full bg-sky-200 shadow-[0_0_12px_rgba(186,230,253,0.7)]" />
                </span>
            </div>

            {/* Card content */}
            <h3 className="mb-3 text-lg font-semibold tracking-tight text-white md:text-xl">
                {card.head}
            </h3>

            <p className="text-sm leading-6 text-white/70">
                {card.body}
            </p>
        </div>
    );
};

export default Section2Card;