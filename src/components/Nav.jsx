import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <ul
      className="nav flex justify-center gap-10 p-5 fixed bottom-0 left-0 w-full border-t font-semibold text-xs 
      bg-white lg:relative lg:text-base lg:border-none lg:justify-end lg:p-0"
    >
      <li className="item w-full lg:w-fit">
        <Link className="link" href="/about">
          <Image
            className="mx-auto mb-2 lg:hidden"
            src="/vectors/user.svg"
            width={24}
            height={24}
            alt="User icon"
          ></Image>
          <span className="inline-block w-full text-center">About</span>
        </Link>
      </li>
      <li className="item w-full lg:w-fit">
        <Image
          className="mx-auto mb-2 lg:hidden"
          src="/vectors/folder.svg"
          width={24}
          height={24}
          alt="Folder icon"
        ></Image>
        <Link className="link" href="/projects">
          <span className="inline-block w-full text-center">Projects</span>
        </Link>
      </li>
      <li className="item w-full lg:w-fit">
        <Image
          className="mx-auto mb-2 lg:hidden"
          src="/vectors/phone.svg"
          width={24}
          height={24}
          alt="Phone icon"
        ></Image>
        <Link className="link" href="/contacts">
          <span className="inline-block w-full text-center">Contacts</span>
        </Link>
      </li>
    </ul>
  );
}
