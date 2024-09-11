export default function Subheading({ children, className }) {
  return (
    <p
      className={
        "text-slate-500 max-w-[650px] lg:max-w-[800px] xl:max-w-[1000px] " +
        className
      }
    >
      {children}
    </p>
  );
}
