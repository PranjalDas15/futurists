import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";


function ThemeToggler() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="cursor-pointer">
            {theme === 'light' ? (<Moon onClick={toggleTheme} className="hover:fill-current transition-all transition-setting-1" />) : (<Sun onClick={toggleTheme} className="hover:stroke-yellow-500 transition-all transition-setting-1" />)}
        </div>
    )
}

export default ThemeToggler