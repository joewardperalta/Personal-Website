export default function ExperienceCard({
  duration,
  type,
  description,
  className,
}) {
  return (
    <div
      className={
        "px-3 py-2 flex items-center gap-3 bg-white shadow-lg rounded-lg leading-[1rem] " +
        className
      }
    >
      <span className="font-semibold text-xl text-primary capitalize">
        {duration}
      </span>
      <div>
        <p className="font-semibold text-[0.75rem]">{type}</p>
        <p className="text-gray-600 text-[0.75rem] capitalize font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
