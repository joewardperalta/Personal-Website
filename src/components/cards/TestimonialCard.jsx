import Image from "next/image";

export default function TestimonialCard({ name, role, comment, image }) {
  return (
    <div className="px-5 py-6 rounded-xl shadow-md space-y-5 w-full h-fit">
      <div className="flex gap-2">
        <Image src="/images/star.png" width={16} height={16} alt="star" />
        <Image src="/images/star.png" width={16} height={16} alt="star" />
        <Image src="/images/star.png" width={16} height={16} alt="star" />
        <Image src="/images/star.png" width={16} height={16} alt="star" />
        <Image src="/images/star.png" width={16} height={16} alt="star" />
      </div>
      <div className="space-y-5">
        <p>{comment}</p>
        <div className="flex gap-4 items-center">
          <Image
            className="rounded-full w-12 h-12 object-cover"
            src={image}
            width={64}
            height={64}
            alt="Author's profile"
          />
          <div>
            <p className="font-medium text-slate-900 leading-normal">{name}</p>
            <p className="text-slate-500 font-medium leading-none text-sm">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
