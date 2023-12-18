export default function ProjectButton({
  children,
  project,
  activeProject,
  ...props
}) {
  const classes =
    JSON.stringify(project) === JSON.stringify(activeProject)
      ? "w-full text-left text-stone-200 mt-2 bg-stone-800"
      : "w-full text-left text-stone-200 mt-2 hover:bg-stone-800";

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
