export default function Textarea({ rows, cols, id, name, placeholder }) {
  return (
    <textarea
      className="px-4 py-3 text-sm max-h-[12rem] rounded-xl bg-transparent border border-slate-500 text-slate-400 placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-slate-400 md:max-h-60 md:text-base lg:px-7 lg:py-5"
      rows={rows}
      cols={cols}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
}
