export default function SecondaryButton({ children, className }) {
  return (
    <button
      className={
        "font-medium px-8 py-3 w-full flex items-center gap-2 justify-center md:w-fit " +
        className
      }
    >
      {children}
    </button>
  );
}
