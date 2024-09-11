export default function Section({ children, className, id }) {
  return (
    <section className={"py-32 " + className} id={id}>
      {children}
    </section>
  );
}
