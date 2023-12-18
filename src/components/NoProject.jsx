import DefaultButton from "../ui/DefaultButton";
import NoProjectImage from "../assets/noprojects.png";

export default function NoProject({ handleNewProjectWindow }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src={NoProjectImage} alt="An empty task list" className=" w-20  " />
      <h2 className="text-2xl font-bold text-stone-700 mb-4">
        No Project Selected
      </h2>
      <p className="mb-4 text-stone-700">
        Select a project or get started with a new one
      </p>
      <DefaultButton onClick={() => handleNewProjectWindow(true)}>
        Create new project
      </DefaultButton>
    </div>
  );
}
