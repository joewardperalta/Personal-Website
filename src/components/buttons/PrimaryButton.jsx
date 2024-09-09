export default function PrimaryButton({ children }) {
  return (
    <button className="font-medium px-8 py-3 bg-secondary text-white rounded-full w-full md:w-fit">
      {children}
    </button>
  );
}
