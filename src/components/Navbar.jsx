import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <nav className="navbar flex justify-between items-center p-5 mx-auto w-full lg:max-w-[1400px]">
      {children}
    </nav>
  );
}
