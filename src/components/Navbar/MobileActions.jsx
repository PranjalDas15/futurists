import { Menu, X } from "lucide-react";
import ThemeToggler from "../ui/ThemeToggler";

const MobileActions = ({ mobileOpen, setMobileOpen }) => {
    return (
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <div className="flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white/30 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                <ThemeToggler />
            </div>

            <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white/40 text-text-primary shadow-sm backdrop-blur-xl transition-colors hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5"
            >
                {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
        </div>
    );
};

export default MobileActions;