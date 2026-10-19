const Stats = ({ data = [] }) => {
    return (
        <div className="grid w-full max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:gap-10">
            {data.map((item, index) => (
                <div
                    key={item.text ?? index}
                    className="flex flex-col items-center gap-2 text-center"
                >
                    <div className="flex items-baseline justify-center gap-0.5">
                        <h2 className="text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl">
                            {item.data}
                        </h2>

                        <span className="text-2xl font-semibold text-violet-500 sm:text-3xl">
                            +
                        </span>
                    </div>

                    <p className="max-w-40 text-xs leading-5 text-text-primary/60 sm:text-sm">
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Stats;