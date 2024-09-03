// Font
import { Poppins } from "next/font/google";

// CSS
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";
import Nav from "@/components/Nav";
import Navbrand from "@/components/Navbrand";

// Config
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
