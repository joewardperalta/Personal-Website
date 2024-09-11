export default function Heading({ children, className }) {
  return (
    <h2 className={"font-bold text-4xl mb-4 text-slate-900 " + className}>
      {children}
    </h2>
  );
}
