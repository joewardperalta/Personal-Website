import Link from "next/link";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center p-5 mx-auto w-full lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1600px]">
      <h1>
        <Link className="link font-bold text-4xl" href="/">
          Joe.
        </Link>
      </h1>

      <Nav />
    </nav>
  );
}
