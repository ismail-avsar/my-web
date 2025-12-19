function Profile({ profileData }) {
    return (
        <section id="profile" className="py-16 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl font-bold mb-12">{profileData.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    {/* !important etkisi için style ekledik veya net renk sınıfı */}
                    <h3 className="text-2xl font-bold mb-6 text-[#4731d3] dark:text-[#b7abff]">
                        {profileData.infoTitle}
                    </h3>
                    <div className="space-y-4">
                        {profileData.details.map((item, index) => (
                            <div key={index} className="flex border-b border-gray-100 dark:border-gray-800 pb-2">
                                <span className="font-bold w-1/3">{item.label}</span>
                                <span className="flex-1 opacity-80">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#4731d3] dark:text-[#b7abff]">
                        {profileData.aboutMe.title}
                    </h3>
                    <p className="leading-relaxed opacity-80">{profileData.aboutMe.content1}</p>
                    <p className="leading-relaxed opacity-80">{profileData.aboutMe.content2}</p>
                </div>
            </div>
        </section>
    );
}
export default Profile;