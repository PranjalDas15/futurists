
import { ArrowUpRight } from "lucide-react";

const Button = ({ name, className = "" }) => {
    return (
        <button
            type="button"
            className={`group relative inline-flex h-[50px] min-w-[120px] items-center justify-center gap-2 overflow-hidden rounded-full border border-sky-400/40 bg-gradient-to-r from-sky-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-md shadow-sky-500/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-sky-300/70 hover:shadow-lg hover:shadow-sky-500/30 active:translate-y-0 active:scale-[0.97] dark:from-sky-500 dark:to-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 ${className}`}
        >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">{name}</span>

            <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
        </button>
    );
};

export default Button;
