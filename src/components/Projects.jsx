import { useContext } from "react";
import TableBody from "./TableBody";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Projects() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div className={`text-center py-5 ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
            <h2 className="md:w-lg w-md mx-auto text-3xl/8 sm:text-4xl/12 md:text-5xl/15">📅 Welcome to My 30DayOfReact Journey</h2>
            <TableBody />
        </div>
    )
}