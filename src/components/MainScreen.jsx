import { useState } from "react";
import NewProject from "./NewProject";
import NoProject from "./NoProject";
import ProjectView from "./ProjectView";

export default function MainScreen({
  handleSetProjects,
  newProjectIsActive,
  handleNewProjectWindow,
  activeProject,
  setProjects,
  setActiveProject,
  activeProjectTasks,
  setActiveProjectTasks,
  projects,
}) {
  return (
    <div className="w-full h-screen flex justify-center">
      {!newProjectIsActive && !activeProject && (
        <NoProject handleNewProjectWindow={handleNewProjectWindow} />
      )}
      {newProjectIsActive && (
        <NewProject
          handleSetProjects={handleSetProjects}
          handleNewProjectWindow={handleNewProjectWindow}
        />
      )}
      {activeProject && (
        <ProjectView
          project={activeProject}
          setProjects={setProjects}
          projects={projects}
          setActiveProject={setActiveProject}
          activeProjectTasks={activeProjectTasks}
          setActiveProjectTasks={setActiveProjectTasks}
        />
      )}
    </div>
  );
}
