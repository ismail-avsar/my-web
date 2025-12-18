function Projects({ projectsData }) {
    if (!projectsData) return null;

    return (
        <section id="projects">
            <h2>{projectsData.title}</h2>

            <div>
                {projectsData.list.map((project, index) => (
                    <div key={index}>
                        <img src={project.image} alt={project.title} />

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <ul>
                            {project.tags.map((tag, i) => (
                                <li key={i}>{tag}</li>
                            ))}
                        </ul>

                        <div>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>

                            <a
                                href={project.viewSite}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Site
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
