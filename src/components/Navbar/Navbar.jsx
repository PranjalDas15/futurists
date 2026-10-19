
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { assets, navlinks } from "../../assets/assets";
import NavSectionWraper from "./NavSectionWraper";
import ThemeToggler from "../ui/ThemeToggler";
import Button from "./Button";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

    const solutions = navlinks.find(
        (nav) => nav.name === "Solutions"
    );

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setMobileSolutionsOpen(false);
    };

    return (
        <nav
            className="relative z-50 w-full px-4 sm:px-6 lg:px-8"
            onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="mx-auto flex h-[84px] max-w-[1400px] items-center justify-between gap-3 sm:h-[92px] xl:h-[100px] xl:justify-center xl:gap-5">
                {/* Section 1: Logo */}
                <NavSectionWraper
                    width="200px"
                    className="h-[62px] shrink-0 sm:h-[70px]"
                >
                    <a
                        href="/"
                        aria-label="Futurists home"
                        className="flex h-full w-full items-center justify-center"
                    >
                        <img
                            src={assets.logo}
                            alt="Futurists"
                            className="h-[80%] w-[80%] object-contain dark:hidden"
                        />
                        <img
                            src={assets.logo_white}
                            alt="Futurists"
                            className="hidden h-[80%] w-[80%] object-contain dark:block"
                        />
                    </a>
                </NavSectionWraper>

                {/* Section 2: Desktop navigation */}
                <NavSectionWraper
                    width="700px"
                    className="hidden h-[70px] shrink-0 xl:flex"
                >
                    {navlinks.map((nav) => {
                        const hasMenu = nav.menu?.length > 0;
                        const isActive = activeMenu === nav.name;

                        return (
                            <div
                                key={nav.name}
                                className="flex h-full items-center"
                                onMouseEnter={() =>
                                    setActiveMenu(hasMenu ? nav.name : null)
                                }
                            >
                                <a
                                    href={nav.href}
                                    aria-haspopup={hasMenu ? "true" : undefined}
                                    aria-expanded={hasMenu ? isActive : undefined}
                                    className={`flex items-center gap-1 text-[15px] font-semibold transition-colors duration-200 ${isActive
                                            ? "text-sky-500"
                                            : "text-text-primary hover:text-sky-500"
                                        }`}
                                >
                                    {nav.name}

                                    {hasMenu && (
                                        <ChevronDown
                                            size={15}
                                            className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </a>
                            </div>
                        );
                    })}
                </NavSectionWraper>

                {/* Section 3: Desktop actions */}
                <NavSectionWraper
                    width="200px"
                    className="hidden h-[70px] shrink-0 xl:flex"
                >
                    <ThemeToggler />
                    <Button name="Book Now" />
                </NavSectionWraper>

                {/* Mobile actions */}
                <div className="flex shrink-0 items-center gap-2 xl:hidden">
                    <div className="flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white/30 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                        <ThemeToggler />
                    </div>

                    <button
                        type="button"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((open) => !open)}
                        className="flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white/40 text-text-primary shadow-sm backdrop-blur-xl transition-colors hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5"
                    >
                        {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>
            </div>

            {/* Desktop Solutions dropdown */}
            {activeMenu === "Solutions" && solutions?.menu?.length > 0 && (
                <div
                    className="absolute left-1/2 top-[calc(100%-10px)] hidden w-[min(700px,calc(100vw-40px))] -translate-x-1/2 rounded-[30px] border border-slate-200/70 bg-gradient-to-b from-white/95 to-sky-100/90 p-7 shadow-xl shadow-slate-950/10 backdrop-blur-2xl dark:border-white/10 dark:from-gray-800/95 dark:to-slate-900/95 xl:block"
                    onMouseEnter={() => setActiveMenu("Solutions")}
                >
                    <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                        {solutions.menu.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-sky-500/10 hover:text-sky-500"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="absolute left-4 right-4 top-[calc(100%-2px)] rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white/95 to-sky-100/95 p-4 shadow-xl shadow-slate-950/10 backdrop-blur-2xl dark:border-white/10 dark:from-gray-800/95 dark:to-slate-900/95 sm:left-6 sm:right-6 xl:hidden">
                    <div className="flex flex-col">
                        {navlinks.map((nav) => {
                            const hasMenu = nav.menu?.length > 0;
                            const isSolutions = nav.name === "Solutions";

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
                                                aria-label={`Toggle ${nav.name} submenu`}
                                                aria-expanded={
                                                    isSolutions
                                                        ? mobileSolutionsOpen
                                                        : false
                                                }
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
                                                    className={`transition-transform duration-300 ${isSolutions &&
                                                            mobileSolutionsOpen
                                                            ? "rotate-180"
                                                            : ""
                                                        }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {isSolutions &&
                                        hasMenu &&
                                        mobileSolutionsOpen && (
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
                                        )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="pt-4">
                        <Button name="Book Now" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
