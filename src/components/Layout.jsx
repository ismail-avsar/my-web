import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Profile from "./Profile";
import Projects from "./Projects";
import ApiTest from "./ApiTest";

function Layout() {
    const { language } = useContext(LanguageContext);

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
            <Header />
            <Hero heroData={content[language].hero} />
            <Skills skills={content[language].skills} />
            <Projects projectsData={content[language].projects} />
            <Profile profileData={content[language].profile} />
            <ApiTest />
        </div>
    );
}

export default Layout;
