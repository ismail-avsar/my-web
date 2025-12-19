import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { content } from "../data/content";
import darkIcon from "../assets/icons/dark.png";
import lightIcon from "../assets/icons/light.png";

function Header() {
    const { language, setLanguage } = useContext(LanguageContext);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header className="flex flex-col md:flex-row justify-between items-center py-10 gap-8">
            <div className="text-3xl font-bold text-[#4731d3] dark:text-[#b7abff]">
                {content[language].header.name}
            </div>

            <nav className="flex items-center gap-10">
                <ul className="flex gap-8 text-gray-500 dark:text-gray-400 font-bold">
                    {content[language].header.links.map((link, index) => (
                        <li key={index}>
                            <a href={`#${link.id}`} className="hover:text-[#4731d3] transition-colors uppercase text-sm tracking-wider">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-6 border-l pl-8 border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                        className="text-[#4731d3] dark:text-[#b7abff] font-bold text-sm cursor-pointer hover:opacity-70"
                    >
                        {language === "tr" ? "ENGLISH" : "TÜRKÇE"}
                    </button>
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="w-32 h-14 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                    >
                        <img src={theme === "light" ? darkIcon : lightIcon} alt="theme-toggle" className="w-full h-full object-contain" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
export default Header;