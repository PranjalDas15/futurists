import { assets } from "../../assets/assets";
import NavSectionWraper from "./NavSectionWraper";

const NavbarLogo = () => {
    return (
        <NavSectionWraper
            width="200px"
            className="h-11 shrink-0 xl:h-[70px]"
        >
            <a
                href="/"
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
    );
};

export default NavbarLogo;