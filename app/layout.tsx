import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
export const metadata: Metadata = {
  title: "Resume",
  description: "Creative web developer",
  authors: [{name: 'Alex Leimberg'}]
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
      <html lang="en">
      <Navbar/>
      <body>{children}</body>
      <Footer/>
      <Analytics />
      </html>
  );
}
