import { useRef } from "react";
import DefaultButton from "../ui/DefaultButton";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Modal from "./Modal";

export default function NewProject({
  handleSetProjects,
  handleNewProjectWindow,
}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();
  const project = { title: "", description: "", date: "", tasks: [] };

  const handleCreatingProject = () => {
    project.title = titleRef.current.value;
    project.description = descriptionRef.current.value;
    project.date = dateRef.current.value;

    if (
      project.title.trim() === "" ||
      project.description.trim() === "" ||
      project.date.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    handleSetProjects(project);
    handleNewProjectWindow(false);
  };
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Ok">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">
          Invalid Input
        </h2>
        <p className="mb-4 text-stone-700">
          Ooops... seems like you forgot to enter value.
        </p>
        <p className="mb-4 text-stone-700">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-4/5 h-screen flex flex-col justify-center">
        <div className="flex flex-col">
          <div className="flex justify-end">
            <button
              className=" mr-4"
              onClick={() => handleNewProjectWindow(false)}
            >
              Cancel
            </button>
            <DefaultButton onClick={handleCreatingProject}>Save</DefaultButton>
          </div>
          <div className="flex flex-col ">
            <Input label="TITLE" ref={titleRef} type="text" />
            <TextArea
              label="DESCRIPTION"
              ref={descriptionRef}
              cols="20"
              rows="5"
              wrap="hard"
            />
            <Input label="DUE DATE" ref={dateRef} type="date" />
          </div>
        </div>
      </div>
    </>
  );
}
