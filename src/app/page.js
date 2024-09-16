"use client";
import { useState } from "react";
import { portfolioProjects, testimonials } from "@/constants";

import Container from "@/components/containers/Container";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Section from "@/components/containers/Section";
import Subtitle from "@/components/typography/Subtitle";
import Image from "next/image";
import Title from "@/components/typography/Title";
import ExperienceCard from "@/components/cards/ExperienceCard";
import Heading from "@/components/typography/Heading";
import Subheading from "@/components/typography/Subheading";
import ServiceCardSecondary from "@/components/cards/ServiceCardSecondary";
import ServiceCardPrimary from "@/components/cards/ServiceCardPrimary";
import ServiceCardTertiary from "@/components/cards/ServiceCardTertiary";
import TestimonialCard from "@/components/cards/TestimonialCard";
import ProductCard from "@/components/cards/ProductCard";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import ContactPopUp from "@/components/forms/ContactPopUp";

export default function Home() {
  function handleHireMePopUp() {
    const contactFormContainer = document.getElementById(
      "hiring-form-container"
    );
    contactFormContainer.classList.toggle("hidden");
  }

  function handleContactMePopUp() {
    const contactFormContainer = document.getElementById(
      "contact-form-container"
    );
    contactFormContainer.classList.toggle("hidden");
  }

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

            <div className="flex flex-col items-center space-y-8 md:space-x-10 md:flex-row md:justify-center md:space-y-0 lg:justify-start ">
              <PrimaryButton onClick={handleHireMePopUp}>Hire Me</PrimaryButton>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/joewardperalta/"
                  target="_blank"
                >
                  <Image
                    className="w-6"
                    src="/images/linkedin-logo.png"
                    width={64}
                    height={64}
                    alt="LinkedIn"
                  />
                </Link>
                <Link
                  href="https://github.com/joewardperalta?tab=repositories"
                  target="_blank"
                >
                  <Image
                    className="w-6"
                    src="/images/github.png"
                    width={64}
                    height={64}
                    alt="GitHub"
                  />
                </Link>
              </div>
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

          <ContactPopUp
            heading="Hire Me."
            subheading="I am available for freelance, long term, or contract work. Connect with me via phone: 647-901-3040 or email joeward_peralta@outlook.com"
            image=""
            id="hiring-form-container"
            handlePopUp={handleHireMePopUp}
          />
        </Container>
      </Section>

      <Section id="services">
        <Container>
          <div className="text-center mx-auto mb-16">
            <h2 className="uppercase font-bold text-primary mb-1">Services</h2>
            <Heading>Expertise Service! Let&apos;s check it out</Heading>
            <Subheading className="mx-auto">
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

      <Section id="about">
        <Container className="flex gap-10 items-center">
          <div className="w-full hidden lg:block">
            <Image
              className="w-[34rem]"
              src="/images/joeward's photo formal purple.png"
              width={2000}
              height={2000}
              alt="Joeward's picture"
            />
          </div>

          <div className="mb-16 w-full">
            <h2 className="uppercase font-bold text-primary mb-1">About me</h2>
            <Heading>Aspiring Web Developer & Designer</Heading>
            <Subheading>
              Graduated from Seneca College Newnham Polytecnic as a Software
              Developer in August 2024. I specialized in web development field
              working as a full stack developer. Through out my career, I have
              gained valuable knowledge and hands-on experience with various
              tools and technologies in modern world like Figma, Next.js,
              React.js, Tailwind CSS, and much more.
            </Subheading>

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
                    4 Complete Project
                  </h5>
                  <p className="text-slate-600">
                    I have completed at least 2 real world projects for my
                    clients as a freelance web developer and 2 personal
                    projects.
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
                    I have at least 1 year experience working as a freelancer. I
                    have created various projects for my clients to aid their
                    business&apos; online profile.
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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {testimonials.map((testimony) => (
              <TestimonialCard
                key={testimony.id}
                name={testimony.author}
                comment={testimony.comment}
                role={testimony.role}
                image={testimony.image}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="portfolio">
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

      <Section className="bg-primary relative mt-36" id="contact">
        <Container className="">
          <div className="lg:w-1/2">
            <Heading className="text-white">
              Got A Project! Let&apos;s Talk
            </Heading>
            <p className="text-slate-200 mb-10">
              Are you looking for a professional web designer and developer?
              I&apos;m here at your service. For more details about pricing and
              features or any other inquiries, contact me by clicking the button
              below.
            </p>
            <PrimaryButton onClick={handleContactMePopUp}>
              Contact Me
            </PrimaryButton>
          </div>

          <Image
            className="w-[35rem] absolute bottom-0 hidden lg:block lg:right-[24px] 2xl:right-[280px]"
            src="/images/joeward pointing.png"
            width={2000}
            height={2000}
            alt="Joeward pointing"
          />

          <ContactPopUp
            heading="Contact Me."
            subheading="I am here to answer any questions you may have including project development, pricing, services, and more. If you have any other questions please feel free to contact me."
            image=""
            id="contact-form-container"
            handlePopUp={handleContactMePopUp}
          />
        </Container>
      </Section>
    </main>
  );
}
