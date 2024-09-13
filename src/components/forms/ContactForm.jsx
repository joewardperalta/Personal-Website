import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const contactForm = document.getElementById("contact-form");
    contactForm.reset(); // reset input fields

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        setSubmitted(false);
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }

      setSubmitted(true);
      const responseData = await response.json();
      console.log(responseData.message);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-5"
      id="contact-form"
    >
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
      <div className="space-x-4">
        <PrimaryButton type="submit">Send Email</PrimaryButton>
        {submitted && <span className="text-green-400">Sent Successfull</span>}
      </div>
    </form>
  );
}
