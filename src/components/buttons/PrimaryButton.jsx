export default function PrimaryButton({ children }) {
  return (
    <button className="font-medium px-8 py-3 bg-primary text-white rounded-md">
      {children}
    </button>
  );
}
