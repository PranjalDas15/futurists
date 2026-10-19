import { useState } from "react";
import { navlinks } from "../../assets/assets";
import { scrollToBookCall } from "../../lib/wrapers/actions/actions";

import NavbarLogo from "./NavbarLogo";
import DesktopNavigation from "./DesktopNavigation";
import DesktopActions from "./DesktopActions";
import MobileActions from "./MobileActions";
import SolutionsDropdown from "./SolutionsDropdown";
import MobileMenu from "./MobileMenu";

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

    const handleBookNow = () => {
        closeMobileMenu();
        scrollToBookCall();
    };

    return (
        <nav
            className="relative z-50 w-full px-4 sm:px-6 lg:px-8"
            onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="mx-auto flex h-[84px] max-w-[1400px] items-center justify-between gap-3 sm:h-[92px] xl:h-[100px] xl:justify-center xl:gap-5">
                <NavbarLogo />

                <DesktopNavigation
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />

                <DesktopActions onBookNow={handleBookNow} />

                <MobileActions
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                />
            </div>

            <SolutionsDropdown
                activeMenu={activeMenu}
                solutions={solutions}
                setActiveMenu={setActiveMenu}
            />

            <MobileMenu
                isOpen={mobileOpen}
                mobileSolutionsOpen={mobileSolutionsOpen}
                setMobileSolutionsOpen={setMobileSolutionsOpen}
                closeMobileMenu={closeMobileMenu}
                onBookNow={handleBookNow}
            />
        </nav>
    );
};

export default Navbar;