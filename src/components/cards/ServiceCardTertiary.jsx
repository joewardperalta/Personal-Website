import Image from "next/image";

export default function ServiceCardTertiary({ src, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-xl w-full ">
      <div className="rounded-full bg-primary mb-12 p-3">
        <Image className="w-10" src={src} width={64} height={64} alt="Icon" />
      </div>
      <div className="text-center">
        <h5 className="font-bold text-xl mb-3">{title}</h5>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
