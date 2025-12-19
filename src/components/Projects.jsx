function Projects({ projectsData }) {
    return (
        <section id="projects" className="py-16">
            <h2 className="text-4xl font-bold mb-12 border-t pt-16 border-gray-200 dark:border-gray-800">
                {projectsData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {projectsData.list.map((project, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="overflow-hidden rounded-xl mb-6 shadow-lg">
                            <img
                                src={project.image}
                                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                                alt={project.title}
                            />
                        </div>
                        {/* Burada h3 rengini netleştirdik */}
                        <h3 className="text-2xl font-bold text-[#4731d3] dark:text-[#b7abff] mb-3">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex gap-2 mb-6 flex-wrap">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 border border-[#4731d3] dark:border-[#b7abff] rounded text-[10px] font-bold uppercase tracking-wider text-[#4731d3] dark:text-[#b7abff]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-8 font-bold underline decoration-2 underline-offset-8">
                            <a href={project.github} className="text-[#4731d3] dark:text-[#b7abff] hover:opacity-70 transition-opacity">Github</a>
                            <a href={project.viewSite} className="text-[#4731d3] dark:text-[#b7abff] hover:opacity-70 transition-opacity">View Site</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects;