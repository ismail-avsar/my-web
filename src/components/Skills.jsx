function Skills({ skills }) {
    return (
        <section id="skills" className="py-20 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-5xl font-bold mb-16">{skills.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {skills.list.map((skill, index) => (
                    <div key={index} className="space-y-6">
                        <h3 className="text-3xl font-bold text-[#4731d3] dark:text-[#b7abff]">
                            {skill.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;