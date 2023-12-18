import { useEffect, useRef } from "react";
import Input from "../ui/Input";
import Task from "../ui/Task";
import Modal from "./Modal";

export default function ProjectView({
  project,
  projects,
  setProjects,
  activeProjectTasks,
  setActiveProjectTasks,
  setActiveProject,
}) {
  const taskRef = useRef();
  const modalRef = useRef();
  const projectIndex = projects.indexOf(project);

  const handleAddTask = () => {
    if (taskRef.current.value.trim() === "") {
      modalRef.current.open();
      return;
    }
    const updatedActiveProjectTasks = [...activeProjectTasks];
    const updatedProject = projects[projectIndex];
    updatedActiveProjectTasks.unshift(taskRef.current.value);
    taskRef.current.value = "";
    updatedProject.tasks = updatedActiveProjectTasks;
    const updatedProjects = [
      ...projects.slice(0, projectIndex),
      updatedProject,
      ...projects.slice(projectIndex + 1),
    ];
    setProjects(updatedProjects);
    setActiveProjectTasks(updatedActiveProjectTasks);
  };

  const handleDeleteProject = () => {
    const updatedProjects = [...projects];
    updatedProjects.splice(projectIndex, 1);
    setProjects(updatedProjects);
    setActiveProject(null);
  };

  const handleDeleteTask = (idx) => {
    const updatedActiveProjectTasks = [...activeProjectTasks];
    const updatedProject = projects[projectIndex];
    updatedActiveProjectTasks.splice(idx, 1);
    updatedProject.tasks = updatedActiveProjectTasks;
    const updatedProjects = [
      ...projects.slice(0, projectIndex),
      updatedProject,
      ...projects.slice(projectIndex + 1),
    ];
    setProjects(updatedProjects);
    setActiveProjectTasks(updatedActiveProjectTasks);
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Ok">
        <p>It's impossible to add empty task</p>
      </Modal>
      <div className=" flex flex-col  w-3/5 mt-24">
        <div className="flex justify-between">
          <h1 className="text-stone-900 font-bold text-4xl pb-2">
            {project.title}
          </h1>
          <button
            className=" hover:text-rose-500"
            onClick={handleDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="text-stone-500 pb-4 ">{project.date}</p>
        <p className="text-l border-b-4 border-y-stone-400 mb-4 whitespace-pre-wrap">
          {project.description}
        </p>
        <hr />
        <h1 className="text-stone-900 font-bold text-2xl pb-2">Tasks</h1>
        <div className=" mb-3">
          <Input type="text" ref={taskRef} />
          <button className=" ml-4" onClick={handleAddTask}>
            Add task
          </button>
        </div>
        <div className="overflow-auto h-64">
          {activeProjectTasks.length > 0 ? (
            <ol>
              {activeProjectTasks.map((task, idx) => (
                <Task
                  key={idx}
                  task={task}
                  idx={idx}
                  handleDeleteTask={handleDeleteTask}
                />
              ))}
            </ol>
          ) : (
            <p>There is no tasks yet...</p>
          )}
        </div>
      </div>
    </>
  );
}
