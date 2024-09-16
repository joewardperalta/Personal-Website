import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ image, title, description, link }) {
  return (
    <div className="w-[1000px] max-w-[424px]">
      <div className="h-80 mb-7">
        <Image
          className="w-full h-full rounded-xl object-cover object-top"
          src={image}
          width={2000}
          height={2000}
          alt="product"
        />
      </div>
      <div className="flex justify-between items-center gap-5">
        <div>
          <h5 className="font-semibold text-lg text-slate-900">{title}</h5>
          <p className="text-slate-600">{description}</p>
        </div>
        <Link
          className="rounded-full bg-primary p-4 w-[50px] h-[50px]"
          href={link}
          target="_blank"
        >
          <Image
            className="w-full h-full"
            src="/images/up-right-arrow.png"
            width={64}
            height={64}
            alt="link"
          />
        </Link>
      </div>
    </div>
  );
}
