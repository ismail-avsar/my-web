function Projects({ projectsData }) {
    return (
        <section id="projects">
            <h2>{projectsData.title}</h2>

            <div>
                {projectsData.list.map((project, index) => (
                    <div key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
