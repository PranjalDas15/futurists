import { ChevronDown } from "lucide-react";
import { navlinks } from "../../assets/assets";
import NavSectionWraper from "./NavSectionWraper";

const DesktopNavigation = ({ activeMenu, setActiveMenu }) => {
    return (
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
    );
};

export default DesktopNavigation;