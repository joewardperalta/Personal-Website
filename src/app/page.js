import Container from "@/components/containers/Container";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Section from "@/components/containers/Section";
import Subtitle from "@/components/typography/Subtitle";
import Image from "next/image";
import Title from "@/components/typography/Title";

export default function Home() {
  return (
    <main>
      <Section>
        <Container className="flex flex-col text-center gap-24 items-center lg:flex-row lg:text-start">
          <div className="w-full">
            <Title>
              I&apos;m <span className="text-primary">Joeward Peralta</span> a
              full stack web developer.
            </Title>
            <Subtitle>
              I develop and implement UI/UX design into a static or dynamic
              website.
            </Subtitle>
            <PrimaryButton>Learn about me</PrimaryButton>
          </div>
          <div className="w-[70%]">
            <Image
              className="w-full rounded-full"
              src="/images/my-picture.png"
              width={1600}
              height={1600}
              alt="Joeward's picture"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
