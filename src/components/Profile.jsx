function Profile({ profileData }) {

    return (
        <section id="profile">

            <h2 className="">
                {profileData.title}
            </h2>

            <div className="">
                {/* SOL TARAF - BİLGİLER */}
                <div>
                    <h3 className="">
                        {profileData.infoTitle}
                    </h3>

                    <ul className="">
                        {profileData.details.map((item, index) => (
                            <li
                                key={index}
                                className=""
                            >
                                <span className="">
                                    {item.label}:
                                </span>{" "}
                                {item.value}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* SAĞ TARAF - HAKKIMDA */}
                <div>
                    <h3 className="">
                        {profileData.aboutMe.title}
                    </h3>

                    <p className="">
                        {profileData.aboutMe.content1}
                    </p>

                    <p className="">
                        {profileData.aboutMe.content2}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Profile;
