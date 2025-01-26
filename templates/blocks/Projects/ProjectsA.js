
export default function ProjectsA() {
  const { projects } = useProjectStore();
  return (
    <div>
      <h1>Projects</h1>
      <div className="grid gap-4">
        {projects.length > 0 ? (
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.details}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects added yet.</p>
        )}
      </div>
    </div>
  );
};


