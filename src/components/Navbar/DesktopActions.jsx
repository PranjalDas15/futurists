import ThemeToggler from "../ui/ThemeToggler";
import NavSectionWraper from "./NavSectionWraper";
import Button from "./Button";

const DesktopActions = ({ onBookNow }) => {
    return (
        <NavSectionWraper
            width="200px"
            className="hidden h-[70px] shrink-0 xl:flex"
        >
            <ThemeToggler />

            <Button
                name="Book Now"
                onClickFunc={onBookNow}
            />
        </NavSectionWraper>
    );
};

export default DesktopActions;