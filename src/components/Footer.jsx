function Footer({ footerData }) {
    return (
        <footer className="py-20 text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
                {footerData.title}
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-200 dark:border-gray-700 pt-10">
                <a href={`mailto:${footerData.email}`} className="text-red-500 font-bold underline text-lg">
                    👉 {footerData.email}
                </a>
                <div className="flex gap-6 font-medium">
                    {footerData.links.map((link, index) => (
                        <a key={index} href="#" className="hover:text-brand-purple transition-colors">{link}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
export default Footer;