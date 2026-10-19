const SolutionsDropdown = ({
    activeMenu,
    solutions,
    setActiveMenu,
}) => {
    if (activeMenu !== "Solutions" || !solutions?.menu?.length) {
        return null;
    }

    return (
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
    );
};

export default SolutionsDropdown;