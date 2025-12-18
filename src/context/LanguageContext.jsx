import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useLocalStorage("language", "tr");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
