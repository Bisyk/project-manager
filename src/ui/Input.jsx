import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, ...props }, ref) {
  return (
    <>
      <label className="font-bold uppercase">{label}</label>
      <input
        className="h-10 bg-stone-300 outline-none border-b-4 focus:border-stone-800 p-1"
        {...props}
        ref={ref}
      />
    </>
  );
});

export default Input;
