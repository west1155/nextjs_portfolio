import {Element} from 'react-scroll'

import Navbar from '../components/Navbar/Navbar';
import {Hero} from "@/components/ME/ME";
import Footer from "@/components/footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Footer/>
        </>

    );
}
