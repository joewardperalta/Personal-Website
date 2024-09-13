export default function Container({ children, className }) {
  return (
    <div className={"lg:max-w-[1400px] px-3 mx-auto md:px-6 " + className}>
      {children}
    </div>
  );
}
