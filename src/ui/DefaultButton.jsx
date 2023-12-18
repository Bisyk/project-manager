export default function DefaultButton({ children, ...props }) {
  return (
    <button {...props} className="bg-stone-700 text-stone-400 rounded-lg p-2">
      {children}
    </button>
  );
}
