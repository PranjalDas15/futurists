const Section3Card = ({ card }) => {
    const Icon = card.icon;

    return (
        <div className="group relative h-full overflow-hidden rounded-2xl border border-secondary/60 bg-primary/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/[0.06] sm:p-7">

            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-500 ring-1 ring-violet-500/15 transition-colors duration-300 group-hover:from-violet-500/25 group-hover:to-blue-500/25 dark:text-sky-300 dark:ring-white/10">
                {Icon && (
                    <Icon
                        size={23}
                        strokeWidth={1.7}
                    />
                )}
            </div>

            <h3 className="mb-3 text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
                {card.head}
            </h3>

            <p className="text-sm leading-7 text-text-primary/65 sm:text-base">
                {card.body}
            </p>
        </div>
    );
};

export default Section3Card;