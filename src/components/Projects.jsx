function Projects({ projectsData }) {
    return (
        <section id="projects" style={{ marginTop: "80px" }}>
            <h2>{projectsData.title}</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "32px",
                    marginTop: "32px"
                }}
            >
                {projectsData.list.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #ddd",
                            padding: "16px"
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover"
                            }}
                        />

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <ul>
                            {project.tags.map((tag, i) => (
                                <li key={i}>{tag}</li>
                            ))}
                        </ul>

                        <div>
                            <a href={project.github} target="_blank">
                                Github
                            </a>{" "}
                            |{" "}
                            <a href={project.viewSite} target="_blank">
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
