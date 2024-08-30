import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <nav className="navbar flex justify-between items-center p-5 mx-auto w-full lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1600px]">
      {children}
    </nav>
  );
}
