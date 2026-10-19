
import { ChevronDown } from "lucide-react";
import { navlinks } from "../../assets/assets";
import Button from "./Button";

const MobileMenu = ({
    isOpen,
    mobileSolutionsOpen,
    setMobileSolutionsOpen,
    closeMobileMenu,
    onBookNow,
}) => {
    return (
        <div
            className={`absolute left-4 right-4 top-[calc(100%-2px)] z-50 overflow-hidden rounded-3xl transition-all transition-setting-1 sm:left-6 sm:right-6 xl:hidden ${isOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible pointer-events-none translate-y-2 opacity-0"
                }`}
        >
            <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white/95 to-sky-100/95 p-4 shadow-xl shadow-slate-950/10 backdrop-blur-2xl dark:border-white/10 dark:from-gray-800/95 dark:to-slate-900/95">
                <div className="flex flex-col">
                    {navlinks.map((nav) => {
                        const hasMenu = nav.menu?.length > 0;
                        const isSolutions = nav.name === "Solutions";
                        const submenuOpen =
                            isSolutions && mobileSolutionsOpen;

                        return (
                            <div
                                key={nav.name}
                                className="border-b border-slate-200/70 last:border-b-0 dark:border-white/10"
                            >
                                <div className="flex items-center justify-between">
                                    <a
                                        href={nav.href}
                                        onClick={closeMobileMenu}
                                        className="flex-1 py-4 text-sm font-semibold text-text-primary transition-colors hover:text-sky-500"
                                    >
                                        {nav.name}
                                    </a>

                                    {hasMenu && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (isSolutions) {
                                                    setMobileSolutionsOpen(
                                                        (open) => !open
                                                    );
                                                }
                                            }}
                                            className="flex size-10 items-center justify-center rounded-full text-text-primary/70 transition-colors hover:text-sky-500"
                                        >
                                            <ChevronDown
                                                size={17}
                                                className={`transition-transform duration-300 ease-in-out ${submenuOpen
                                                    ? "rotate-180"
                                                    : "rotate-0"
                                                    }`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {hasMenu && (
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${submenuOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="min-h-0 overflow-hidden">
                                            <div className="grid grid-cols-1 gap-1 pb-3 pl-3">
                                                {nav.menu.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={closeMobileMenu}
                                                        className="rounded-xl px-3 py-3 text-sm text-text-primary/75 transition-colors hover:bg-sky-500/10 hover:text-sky-500"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="pt-4">
                    <Button
                        name="Book Now"
                        onClickFunc={onBookNow}
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
