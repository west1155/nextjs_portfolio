import type {Metadata} from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
    title: "Resume",
    description: "Creative web developer",
    authors: [{name: 'Alex Leimberg'}]
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (

        <html lang={"en"}>
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>


)
;
}
