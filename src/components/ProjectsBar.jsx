import DefaultButton from "../ui/DefaultButton";
import ProjectButton from "../ui/ProjectButton";

export default function ProjectsBar({
  projects,
  handleNewProjectWindow,
  activeProject,
  setActiveProject,
  setActiveProjectTasks,
}) {
  const handleAddProject = () => {
    handleNewProjectWindow(true);
    setActiveProject(null);
  };

  const handleSelectProject = (project) => {
    setActiveProject(project);
    setActiveProjectTasks(project.tasks);
    handleNewProjectWindow(false);
  };

  return (
    <aside className="h-screen w-1/3 flex items-center md:w-80">
      <div className=" h-4/5 w-80 bg-stone-900 rounded-r-lg">
        <div className=" p-3">
          <h1 className=" text-2xl font-semibold text-stone-200 uppercase mb-4">
            YOUR PROJECTS
          </h1>
          <DefaultButton onClick={handleAddProject}>
            + Add project
          </DefaultButton>
          <div className="overflow-auto max-h-96 mt-4">
            {projects.map((project, idx) => (
              <ProjectButton
                key={idx}
                onClick={() => handleSelectProject(project)}
                activeProject={activeProject}
                project={project}
              >
                {project.title}
              </ProjectButton>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
