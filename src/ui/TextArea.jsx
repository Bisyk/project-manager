import { forwardRef } from "react";

const TextArea = forwardRef(function TextArea({ label, ...props }, ref) {
  return (
    <>
      <label className="font-bold uppercase">{label}</label>
      <textarea
        {...props}
        ref={ref}
        className="bg-stone-300 outline-none border-b-4 focus:border-stone-800 p-1"
      ></textarea>
    </>
  );
});

export default TextArea;
