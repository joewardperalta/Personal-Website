"use client";
import { useState } from "react";
import { portfolioProjects } from "@/constants";

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
import TestimonialCard from "@/components/cards/TestimonialCard";
import ProductCard from "@/components/cards/ProductCard";

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
        <Container className="flex gap-10">
          <div className="w-full hidden lg:block">
            <Image
              className="w-full"
              src="/"
              width={2000}
              height={2000}
              alt="Joeward's picture"
            />
          </div>

          <div className="mb-16 w-full">
            <div className="mb-8">
              <h2 className="uppercase font-bold text-primary mb-1">
                About me
              </h2>
              <Heading>Aspiring Web Developer & Designer</Heading>
              <Subheading className="mx-0">
                Graduated from Seneca College Newnham Polytecnic as a Software
                Developer in August 2024. I specialized in web development field
                working as a full stack developer. Through out my career, I have
                gained valuable knowledge and hands-on experience with various
                tools and technologies in modern world like Figma, Next.js,
                React.js, Tailwind CSS, and much more.
              </Subheading>
            </div>

            <div className="space-y-5 mb-10">
              <div className="p-5 bg-orange-200 flex gap-5 rounded-xl">
                <div className="rounded-full border-2 border-orange-500 h-fit p-[0.4375rem] w-[2.5rem]">
                  <Image
                    className="w-full"
                    src="/images/right-arrow-orange.png"
                    width={64}
                    height={64}
                    alt="arrow right icon"
                  />
                </div>
                <div>
                  <h5 className="font-medium text-lg mb-3 text-slate-900">
                    2 Complete Project
                  </h5>
                  <p className="text-slate-600">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Id
                    finibus elementum lobortis commodo vivamus suspendisse
                    adipiscing id.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-purple-200 flex gap-5 rounded-xl">
                <div className="rounded-full border-2 border-purple-500 h-fit p-[0.4375rem] w-[2.5rem]">
                  <Image
                    className="w-full"
                    src="/images/right-arrow-purple.png"
                    width={64}
                    height={64}
                    alt="arrow right icon"
                  />
                </div>
                <div>
                  <h5 className="font-medium text-lg mb-3 text-slate-900">
                    1 Year Experience As Freelancer
                  </h5>
                  <p className="text-slate-600">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Id
                    finibus elementum lobortis commodo vivamus suspendisse
                    adipiscing id.
                  </p>
                </div>
              </div>
            </div>

            <PrimaryButton className="flex items-center gap-5 justify-center">
              <span>Download CV</span>
              <Image
                className="w-5"
                src="/images/next.png"
                width={64}
                height={64}
                alt="arrow right"
              />
            </PrimaryButton>
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

      <Section>
        <Container>
          <div className="text-center mx-auto mb-16">
            <h2 className="uppercase font-bold text-primary mb-1">
              Testimonials
            </h2>
            <Heading>What People Say&apos;s About Me</Heading>
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <TestimonialCard
              name="John David Fernan"
              comment="Lorem ipsum odor amet, consectetuer adipiscing elit. Sed sed fusce lobortis curae vel duis. Duis orci feugiat mauris; feugiat aptent massa."
              role="Head Pastor"
            />
            <TestimonialCard
              name="Karen Adriano"
              comment="Lorem ipsum odor amet, consectetuer adipiscing elit. Sed sed fusce lobortis curae vel duis. Duis orci feugiat mauris; feugiat aptent massa."
              role="CEO"
            />
            <TestimonialCard
              name="John Paul Tan"
              comment="Lorem ipsum odor amet, consectetuer adipiscing elit. Sed sed fusce lobortis curae vel duis. Duis orci feugiat mauris; feugiat aptent massa."
              role="CEO"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mx-auto mb-16">
            <h2 className="uppercase font-bold text-primary mb-1">Portfolio</h2>
            <Heading>Digital Product Showcases</Heading>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <ProductCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
