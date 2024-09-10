import Container from "@/components/containers/Container";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Section from "@/components/containers/Section";
import Subtitle from "@/components/typography/Subtitle";
import Image from "next/image";
import Title from "@/components/typography/Title";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ExperienceCard from "@/components/cards/ExperienceCard";
import Heading from "@/components/typography/Heading";
import Subheading from "@/components/typography/Subheading";
import ServiceCardSecondary from "@/components/cards/ServiceCardSecondary";
import ServiceCardPrimary from "@/components/cards/ServiceCardPrimary";
import ServiceCardTertiary from "@/components/cards/ServiceCardTertiary";

export default function Home() {
  return (
    <main>
      <Section className="hero-section pt-26">
        <Container className="flex flex-col text-center gap-14 items-center lg:gap-16 xl:gap-36 lg:flex-row lg:text-start">
          <div className="w-full">
            <Title>
              I&apos;m <span className="text-primary">Joeward Peralta</span> a
              full stack web developer.
            </Title>
            <Subtitle>
              Working in the software development field for 1 year as a
              freelancer, specialized in user interface development.
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
              duration="1"
              type="Year"
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

      <Section>
        <Container>
          <div className="text-center mx-auto mb-16">
            <h2 className="uppercase font-bold text-primary mb-1">Services</h2>
            <Heading>Expertise Service! Let&apos;s check it out</Heading>
            <Subheading>
              In today’s fast-paced digital world, having a powerful and
              engaging online presence is crucial for success. I specialize in
              creating scalable websites that captivates your audience and also
              drive measurable results.
            </Subheading>
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <ServiceCardSecondary
              src="/images/ux-design.png"
              title="UI UX Design"
              description="Create outstanding visuals that is tailored for your needs using tools like Figma."
            />
            <ServiceCardPrimary
              className="bg-primary"
              src="/images/web-content.png"
              title="Front End Develop"
              description="Develop the structure and design part of the website using HTML, CSS, and JavaScript."
            />
            <ServiceCardSecondary
              src="/images/back-end.png"
              title="Back End Develop"
              description="Develop and integrate database into a website for the management and storage of data."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mx-auto mb-16">
            <h2 className="uppercase font-bold text-primary mb-1">Process</h2>
            <Heading>My Working Process</Heading>
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <ServiceCardTertiary
              className="bg-white"
              src="/images/data-gathering.png"
              title="Gather Requirements"
              description="Gather and collect information from the client about their business and the type of contents they need for their website."
            />
            <ServiceCardTertiary
              className="bg-white"
              src="/images/sketch.png"
              title="Design UI UX"
              description="Gather and collect information from the client about their business and the type of contents they need for their website."
            />
            <ServiceCardTertiary
              className="bg-white"
              src="/images/customer-support.png"
              title="Develop Website"
              description="Gather and collect information from the client about their business and the type of contents they need for their website."
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
