import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";
import ApiTest from "./ApiTest";

function Layout() {
    const { language } = useContext(LanguageContext);

    return (
        <div className="max-w-6xl mx-auto px-6 py-8 space-y-20">
            <Header />
            <main className="space-y-24">
                <Hero heroData={content[language].hero} />
                <Skills skills={content[language].skills} />
                <Profile profileData={content[language].profile} />
                <Projects projectsData={content[language].projects} />
                <ApiTest />
            </main>
            <Footer footerData={content[language].footer} />
        </div>
    );
}

export default Layout;