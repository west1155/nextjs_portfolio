import {Element} from 'react-scroll'

import Navbar from '../components/Navbar/Navbar';
import {Hero} from "@/components/ME/ME";
import Footer from "@/components/footer/Footer";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ContactArea from "@/components/Contacts/ContactsArea";

export default function Home() {
    return (
        <>
            <Hero/>
            <ProjectSection />
        </>

    );
}
