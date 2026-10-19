import { ArrowUpRight } from "lucide-react";

const Button = ({ type = "button", onClick, className = "", name }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${className} group flex items-center justify-center gap-3 rounded-full border border-indigo-600 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 active:translate-y-0 active:scale-[0.99] dark:border-white/25 dark:bg-none dark:bg-white dark:text-indigo-700`}
        >
            {name}

            <span className="flex size-8 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:rotate-45 dark:bg-indigo-600 dark:text-white">
                <ArrowUpRight size={17} />
            </span>
        </button>
    );
};

export default Button;