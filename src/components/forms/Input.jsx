export default function Input({ type, id, name, placeholder, required }) {
  return (
    <input
      className="px-4 py-3 text-sm rounded-xl bg-transparent border border-slate-500 placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-slate-400 md:text-base lg:px-7 lg:py-5"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
}
