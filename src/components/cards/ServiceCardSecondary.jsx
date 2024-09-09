import Image from "next/image";

export default function ServiceCardSecondary({ src, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center p-10 rounded-xl bg-slate-200 w-full ">
      <Image
        className="mb-12"
        src={src}
        width={64}
        height={64}
        alt="Icon"
      ></Image>
      <div className="text-center">
        <h5 className="font-bold text-xl mb-3">{title}</h5>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
