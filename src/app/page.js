import Container from "@/components/containers/Container";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Section from "@/components/containers/Section";
import Subtitle from "@/components/typography/Subtitle";
import Image from "next/image";
import Title from "@/components/typography/Title";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ExperienceCard from "@/components/cards/experience-card";

export default function Home() {
  return (
    <main>
      <Section className="hero-section pb-20">
        <Container className="flex flex-col text-center gap-14 items-center lg:gap-16 xl:gap-36 lg:flex-row lg:text-start">
          <div className="w-full">
            <Title>
              I&apos;m <span className="text-primary">Joeward Peralta</span> a
              full stack web developer.
            </Title>
            <Subtitle>
              I develop and implement UI/UX design into a static or dynamic
              website.
            </Subtitle>
            <div className="flex flex-col md:flex-row md:justify-center  lg:justify-start">
              <PrimaryButton>Get started</PrimaryButton>
              <SecondaryButton>
                <Image
                  className="w-5"
                  src="/images/play.png"
                  width={64}
                  height={64}
                  alt="play button"
                />
                <span>Watch Intro</span>
              </SecondaryButton>
            </div>
          </div>
          <div className="hidden relative md:block max-w-[500px]">
            <Image
              className="w-full rounded-full -ml-5"
              src="/images/my-picture.png"
              width={1600}
              height={1600}
              alt="Joeward's picture"
            />
            <ExperienceCard
              className="absolute top-[35%] right-[0]"
              duration="8"
              type="Months"
              description="Experience"
            />
            <ExperienceCard
              className="absolute top-[70%] left-[10%]"
              duration="5000+"
              type="Hours"
              description="Studying"
            />
            <ExperienceCard
              className="absolute top-[20%] -left-[5%]"
              duration="2"
              type="Client Project"
              description="Completed"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
