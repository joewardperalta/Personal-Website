export default function Heading({ children, className }) {
  return (
    <h2
      className={
        "font-bold mb-4 text-slate-900 text-3xl lg:text-4xl " + className
      }
    >
      {children}
    </h2>
  );
}
