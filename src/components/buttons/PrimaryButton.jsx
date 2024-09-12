export default function PrimaryButton({ children, className, type, onClick }) {
  return (
    <button
      className={
        "font-medium px-8 py-3 bg-secondary text-white rounded-full w-full text-sm md:w-fit md:text-base " +
        className
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
