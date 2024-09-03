import Link from "next/link";

export default function Navbrand() {
  return (
    <h1 className="navbrand w-full">
      <Link className="link font-[700] text-2xl relative text-primary" href="/">
        <span>Joeward</span>
        <span className="absolute top-[22px] right-0 text-xs">peralta</span>
      </Link>
    </h1>
  );
}
