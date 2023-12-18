import { useState, useEffect } from "react";
import MainScreen from "./components/MainScreen";
import ProjectsBar from "./components/ProjectsBar";

function App() {
  const localProjects = JSON.parse(localStorage.getItem("projects")) || [];
  const [projects, setProjects] = useState(localProjects);
  const [newProjectIsActive, setNewProjectIsActive] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeProjectTasks, setActiveProjectTasks] = useState(null);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [activeProjectTasks]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const handleNewProjectWindow = (status) => {
    setNewProjectIsActive(status);
  };

  const handleSetProjects = (project) => {
    const updatedProjects = [...projects];
    updatedProjects.unshift(project);
    setActiveProject(project);
    setProjects(updatedProjects);
    setActiveProjectTasks(null);
  };

  return (
    <main className="bg-stone-200 flex ">
      <ProjectsBar
        projects={projects}
        handleNewProjectWindow={handleNewProjectWindow}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        setActiveProjectTasks={setActiveProjectTasks}
      />
      <MainScreen
        handleSetProjects={handleSetProjects}
        handleNewProjectWindow={handleNewProjectWindow}
        newProjectIsActive={newProjectIsActive}
        setActiveProject={setActiveProject}
        activeProject={activeProject}
        setProjects={setProjects}
        projects={projects}
        activeProjectTasks={activeProjectTasks}
        setActiveProjectTasks={setActiveProjectTasks}
      />
    </main>
  );
}

export default App;
