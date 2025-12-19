function Hero({ heroData }) {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12">
            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[2px] bg-[#4731d3] dark:bg-[#b7abff]"></div>
                    <span className="text-[#4731d3] dark:text-[#b7abff] font-bold uppercase tracking-widest text-sm">
                        {heroData.subtitle}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] max-w-[15ch] md:max-w-[20ch]">
                    {heroData.title}
                </h1>

                <p className="text-lg md:text-xl opacity-70 max-w-md leading-relaxed">
                    {heroData.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    {heroData.buttons.map((btn, index) => (
                        <a
                            key={index}
                            href={btn.link || "#"}
                            className={`px-8 py-3 rounded-lg font-bold transition-all ${btn.type === 'primary'
                                    ? 'bg-[#4731d3] text-white hover:opacity-90 shadow-lg'
                                    : 'border border-[#4731d3] text-[#4731d3] dark:border-[#b7abff] dark:text-[#b7abff] hover:bg-gray-50 dark:hover:bg-white/10'
                                }`}
                        >
                            {btn.text}
                        </a>
                    ))}
                </div>
            </div>

            {/* Sağ Görsel Alanı - Kesilme Sorunu Çözüldü */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[350px] md:max-w-[450px]">
                    <img
                        src={heroData.image}
                        className="w-full h-auto rounded-3xl shadow-2xl z-10 relative block object-contain"
                        alt="profile"
                    /* object-contain ve h-auto resmin kesilmesini engeller */
                    />
                    {/* Arka plandaki dekoratif kutu - Resmin altına tam oturması için ayarlandı */}
                    <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#4731d3] dark:bg-[#b7abff] rounded-3xl -z-0 opacity-10"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;