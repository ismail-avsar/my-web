import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Profile from "./Profile";
import Projects from "./Projects";

function Layout() {
    const { language } = useContext(LanguageContext);

    return (
        <div className="">
            <Header />
            <Hero heroData={content[language].hero} />
            <Skills skills={content[language].skills} />
            <Profile profileData={content[language].profile} />
            <Projects projectsData={content[language].projects} />

        </div>
    );
}

export default Layout;
