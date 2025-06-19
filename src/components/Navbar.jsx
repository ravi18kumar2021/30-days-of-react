import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className="bg-red-300 flex flex-col sm:flex-row items-center justify-between p-4 gap-2">
            <ul className="flex flex-col sm:flex-row items-center gap-2 md:gap-6">
                <li className="bg-purple-600 px-4 py-2 rounded-lg text-white font-bold">Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Portfolio</li>
            </ul>
            <div className="mx-4">
                <button onClick={toggleTheme} className="bg-green-700 rounded-lg text-white px-5 py-2 font-bold">{theme === 'dark' ? 'Light' : 'Dark'}</button>
            </div>
        </nav>
    )
}