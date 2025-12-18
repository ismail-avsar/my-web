function Footer({ footerData }) {
    if (!footerData) return null;

    return (
        <footer>
            <h2>{footerData.title}</h2>

            <p>
                <a href={`mailto:${footerData.email}`}>
                    {footerData.email}
                </a>
            </p>

            <ul>
                {footerData.links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
