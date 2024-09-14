import Container from "../containers/Container";
import Heading from "../typography/Heading";
import Subheading from "../typography/Subheading";
import ContactForm from "./ContactForm";
import Image from "next/image";

export default function ContactPopUp({
  heading,
  subheading,
  image,
  id,
  handlePopUp,
}) {
  return (
    <div
      className="w-full h-full bg-slate-900 fixed left-0 top-0 py-20 hidden"
      id={id}
    >
      <Container className="h-full flex justify-center items-center lg:gap-20">
        <div className="w-full">
          <Heading className="text-white">{heading}</Heading>
          <Subheading>{subheading}</Subheading>
          <ContactForm />
        </div>
        <Image
          className="h-[700px] w-full hidden lg:block"
          src={image}
          width={2000}
          height={2000}
          alt="Joeward's image wearing formal clothe"
        />
      </Container>

      <button onClick={handlePopUp}>
        <Image
          className="w-5 absolute top-5 right-5 md:w-7 xl:top-10 xl:right-10"
          src="/images/close.png"
          width={64}
          height={64}
          alt="close icon"
        />
      </button>
    </div>
  );
}
