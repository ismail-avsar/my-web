function Hero({ heroData }) {
    return (
        <section
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "32px",
                marginTop: "40px",
                overflowX: "hidden"
            }}
        >
            {/* Sol içerik */}
            <div style={{ flex: "1 1 0", minWidth: "280px" }}>
                <h2>{heroData.title}</h2>
                <p>{heroData.description}</p>

                <div>
                    {heroData.buttons.map((btn, index) => (
                        <button key={index}>
                            {btn.icon && <img src={btn.icon} alt={btn.text} />}
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sağ görsel */}
            <div style={{ flex: "1 1 0", minWidth: "280px", textAlign: "center" }}>
                <img
                    src={heroData.image}
                    alt="hero"
                    style={{
                        maxWidth: "100%",
                        width: "300px",
                        height: "auto"
                    }}
                />
            </div>
        </section>
    );
}

export default Hero;
