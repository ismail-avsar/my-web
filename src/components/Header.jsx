import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { content } from "../data/content";
import darkIcon from "../assets/icons/dark.png";
import lightIcon from "../assets/icons/light.png";


function Header() {
    const { language, setLanguage } = useContext(LanguageContext);
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleLanguage = () => {
        setLanguage(language === "tr" ? "en" : "tr");
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header>
            {/* Logo */}
            <div>
                <h1>{content[language].header.name}</h1>
            </div>

            {/* Menü */}
            <nav>
                <ul>
                    {content[language].header.links.map((link, index) => (
                        <li key={index}>
                            <a href={`#${link.id}`}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>

            {/* Actions */}
            <div>
                <button onClick={toggleLanguage}>
                    {language === "tr" ? "EN" : "TR"}
                </button>

                <button onClick={toggleTheme} className="p-2">
                    <img
                        src={theme === "light" ? darkIcon : lightIcon}
                        alt="theme toggle"
                    />
                </button>
            </div>
        </header>
    );
}

export default Header;
