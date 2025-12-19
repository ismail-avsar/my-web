function Hero({ heroData }) {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12">
            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[2px] bg-brand-main"></div>
                    <span className="text-brand-main font-bold uppercase tracking-widest text-sm">
                        {heroData.subtitle}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-[18ch]">
                    {heroData.title}
                </h1>
                <p className="text-lg opacity-70 max-w-md">
                    {heroData.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    {heroData.buttons.map((btn, index) => (
                        <a
                            key={index}
                            href={btn.link || "#"}
                            className={`px-8 py-3 rounded-lg font-bold transition-all shadow-md ${btn.type === 'primary'
                                    ? 'bg-brand-main text-white hover:opacity-90'
                                    : 'border border-[#4731d3] dark:border-[#b7abff] text-brand-main hover:bg-gray-50 dark:hover:bg-white/5'
                                }`}
                        >
                            {btn.text}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[340px] md:max-w-[400px]">
                    <img
                        src={heroData.image}
                        className="w-full h-auto rounded-3xl shadow-2xl relative z-10 object-contain block"
                        alt="profile"
                    />
                    <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#4731d3] dark:bg-[#b7abff] rounded-3xl opacity-10"></div>
                </div>
            </div>
        </section>
    );
}
export default Hero;