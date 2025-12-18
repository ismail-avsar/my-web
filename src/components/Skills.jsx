function Skills({ skills }) {
    return (
        <section>
            <h2>{skills.title}</h2>

            <div>
                {skills.list.map((skill, index) => (
                    <div key={index}>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
