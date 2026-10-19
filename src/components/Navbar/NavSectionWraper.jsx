
const NavSectionWraper = ({ children, width, className = "" }) => {
    return (
        <div
            style={{ width }}
            className={`flex items-center justify-evenly rounded-full border border-slate-300 bg-gradient-to-t from-sky-200/30 to-white/20 shadow-lg backdrop-blur-[10px] dark:border-white/10 dark:from-slate-800/30 dark:to-gray-600/20 ${className}`}
        >
            {children}
        </div>
    );
};

export default NavSectionWraper;
