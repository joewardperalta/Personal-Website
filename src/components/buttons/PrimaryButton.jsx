export default function PrimaryButton({ children, className }) {
  return (
    <button
      className={
        "font-medium px-8 py-3 bg-secondary text-white rounded-full w-full md:w-fit " +
        className
      }
    >
      {children}
    </button>
  );
}
