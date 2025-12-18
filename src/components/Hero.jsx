function Hero({ heroData }) {
    return (
        <section>
            {/* Sol içerik */}
            <div>
                <h2>{heroData.title}</h2>
                <p>{heroData.description}</p>

                <div>
                    {heroData.buttons.map((btn, index) => (
                        <button key={index}>
                            {btn.icon && (
                                <img src={btn.icon} alt={btn.text} />
                            )}
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sağ görsel */}
            <div>
                <img src={heroData.image} alt="hero" />
            </div>
        </section>
    );
}

export default Hero;
