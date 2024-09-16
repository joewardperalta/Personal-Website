// Font
import { Poppins } from "next/font/google";

// CSS
import "./globals.css";

// Components
import Navbar from "@/components/navigation/Navbar";
import Nav from "@/components/navigation/Nav";
import Navbrand from "@/components/navigation/Navbrand";
import Container from "@/components/containers/Container";
import Section from "@/components/containers/Section";
import Link from "next/link";

// Config
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Joeward Peralta",
  description:
    "Joeward's Peralta personal website where he showcases all his skills, services, and completed projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <Navbar>
            <Navbrand />
            <Nav />
          </Navbar>
        </header>

        {children}

        <footer>
          <Section className="bg-slate-200 py-8 mb-20 md:mb-0 lg:py-8">
            <Container className="">
              <div className="flex justify-between flex-col lg:flex-row">
                <h6 className="font-medium text-slate-600 text-center">
                  &copy; Copyright 2024. All Rights Reserved.
                </h6>
                <ul className="hidden lg:flex lg:gap-10 lg:font-medium lg:border-2 lg:text-slate-600">
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#about">About</Link>
                  </li>
                  <li>
                    <Link href="#services">Services</Link>
                  </li>
                  <li>
                    <Link href="#portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="#contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </Container>
          </Section>
        </footer>
      </body>
    </html>
  );
}
