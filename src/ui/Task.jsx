export default function Task({ task, handleDeleteTask, idx }) {
  return (
    <div className=" flex justify-between p-4 bg-stone-300">
      <li>{task}</li>
      <button
        className=" hover:text-rose-500"
        onClick={() => handleDeleteTask(idx)}
      >
        Clear
      </button>
    </div>
  );
}
