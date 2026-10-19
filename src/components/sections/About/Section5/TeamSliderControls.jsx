import { ArrowLeft, ArrowRight } from "lucide-react";

const TeamSliderControls = ({
    employees,
    activeIndex,
    onSelect,
    onPrevious,
    onNext,
}) => (
    <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between md:mt-7">
        <div className="flex items-center gap-3">
            <span className="mr-1 font-mono text-[10px] tracking-widest text-text-primary/40 sm:text-xs">
                EXPLORE
            </span>

            <div className="flex items-center gap-2">
                {employees.map((employee, index) => (
                    <button
                        key={employee.id ?? index}
                        type="button"
                        onClick={() => onSelect(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex
                            ? "w-8 bg-indigo-500 sm:w-10"
                            : "w-3 bg-secondary hover:bg-indigo-400/50"
                            }`}
                    />
                ))}
            </div>
        </div>
        <div className="flex items-center justify-between gap-5 sm:justify-end">
            <div className="flex items-baseline gap-2 font-mono tabular-nums">
                <span className="text-base font-semibold text-text-primary sm:text-lg">
                    {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-text-primary/35">
                    / {String(employees.length).padStart(2, "0")}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={onPrevious}
                    className="flex size-10 items-center justify-center rounded-full border border-secondary/70 bg-primary/60 text-text-primary/70 transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-400/10 hover:text-indigo-500 active:scale-95 sm:size-11"
                >
                    <ArrowLeft size={18} strokeWidth={1.6} />
                </button>

                <button
                    type="button"
                    onClick={onNext}
                    className="flex size-10 items-center justify-center rounded-full border border-secondary/70 bg-primary/60 text-text-primary/70 transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-400/10 hover:text-indigo-500 active:scale-95 sm:size-11"
                >
                    <ArrowRight size={18} strokeWidth={1.6} />
                </button>
            </div>
        </div>
    </div>
);

export default TeamSliderControls;