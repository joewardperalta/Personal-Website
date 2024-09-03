export default function Container({ children, className }) {
  return (
    <div className={"lg:max-w-[1400px] px-5 mx-auto " + className}>
      {children}
    </div>
  );
}
