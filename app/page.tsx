import {Element} from 'react-scroll'

import Navbar from '@/components/Navbar/Navbar';
import {Hero} from "@/components/ME/ME";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ContactArea from "@/components/Contacts/ContactsArea";
import Header from "@/components/Header";

export default function Home() {
    return (
        <>
            <Hero/>
            <ProjectSection />
        </>

    );
}
