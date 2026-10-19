const TeamPortrait = ({ employee, index }) => (
    <div className="group relative flex min-h-[270px] items-center justify-center overflow-hidden border-b border-white/15 bg-white/[0.06] px-6 py-8 sm:min-h-[320px] md:min-h-[400px] md:border-b-0 md:border-r md:px-8 md:py-10 lg:min-h-[440px]">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-105 sm:size-[240px] md:size-[270px] lg:size-[300px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 sm:size-[195px] md:size-[215px] lg:size-[240px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/20 blur-3xl" />

        {/* Employee image */}
        <img
            src={employee.img}
            alt={employee.role}
            loading={index === 0 ? "eager" : "lazy"}
            draggable="false"
            className="relative z-10 max-h-[230px] max-w-[72%] object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:max-h-[270px] md:max-h-[290px] md:max-w-[78%] lg:max-h-[320px]"
        />

        {/* Team label */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-indigo-950/20 px-3 py-2 backdrop-blur-lg md:left-6 md:top-6">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                Our team
            </span>
        </div>

        <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white/50 md:bottom-6 md:left-6">
            PEOPLE / {String(index + 1).padStart(2, "0")}
        </span>

        <span className="absolute bottom-4 right-4 font-mono text-[10px] text-white/50 md:bottom-6 md:right-6">
            FUTURISTS®
        </span>
    </div>
);

export default TeamPortrait;