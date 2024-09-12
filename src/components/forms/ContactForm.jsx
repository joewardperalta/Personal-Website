import PrimaryButton from "../buttons/PrimaryButton";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full gap-5">
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Your name *"
        required={true}
      />
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Your email *"
        required={true}
      />
      <Input
        type="text"
        id="subject"
        name="subject"
        placeholder="Write a Subject *"
        required={true}
      />
      <Textarea
        rows={10}
        cols={50}
        id="message"
        name="message"
        placeholder="Write Your Message"
      />
      <PrimaryButton type="submit">Send Email</PrimaryButton>
    </form>
  );
}
