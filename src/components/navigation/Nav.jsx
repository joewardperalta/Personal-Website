import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <ul
      className="nav flex justify-center gap-5 p-5 fixed bottom-0 left-0 w-full border-t font-medium text-[0.5rem] text-slate-900 
      bg-white lg:relative lg:text-base lg:border-none lg:justify-end lg:p-0 lg:gap-10"
    >
      <li className="item w-full lg:w-fit">
        <Link className="link" href="#">
          <Image
            className="mx-auto mb-2 lg:hidden"
            src="/images/home.png"
            width={18}
            height={18}
            alt="User icon"
          ></Image>
          <span className="inline-block w-full text-center">Home</span>
        </Link>
      </li>

      <li className="item w-full lg:w-fit">
        <Link className="link" href="#about">
          <Image
            className="mx-auto mb-2 lg:hidden"
            src="/vectors/user.svg"
            width={18}
            height={18}
            alt="User icon"
          ></Image>
          <span className="inline-block w-full text-center">About</span>
        </Link>
      </li>

      <li className="item w-full lg:w-fit">
        <Link className="link" href="#services">
          <Image
            className="mx-auto mb-2 lg:hidden"
            src="/images/settings.png"
            width={18}
            height={18}
            alt="User icon"
          ></Image>
          <span className="inline-block w-full text-center">Services</span>
        </Link>
      </li>

      <li className="item w-full lg:w-fit">
        <Link className="link" href="#portfolio">
          <Image
            className="mx-auto mb-2 lg:hidden"
            src="/vectors/folder.svg"
            width={18}
            height={18}
            alt="Folder icon"
          ></Image>

          <span className="inline-block w-full text-center">Portfolio</span>
        </Link>
      </li>

      <li className="item w-full lg:w-fit">
        <Link className="link" href="#contact">
          <Image
            className="mx-auto mb-2 lg:hidden"
            src="/vectors/phone.svg"
            width={18}
            height={18}
            alt="Phone icon"
          ></Image>

          <span className="inline-block w-full text-center">Contact</span>
        </Link>
      </li>
    </ul>
  );
}
