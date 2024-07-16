import React from "react";
import himg from '/public/images/about/me_ai.webp';
import Image from "next/image";
import {MeTypeWriter} from "@/components/ME/hero-title-typewriter";
import NavLink from 'next/link'


export const Hero =() => {

    return (
        <section id='me' className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <MeTypeWriter/>
                            <div className="tp-hero-sub">
                                <p>Alex Leimberg</p>
                            </div>
                            <div className="btns">
                                <a href="/" className="theme-btn">Contact Me</a>
                                <a href="https://drive.google.com/file/d/1qejoZ-SaqatQRYJoNimK1Y0B374IkXTY/view"
                                   className="theme-btn"

                                >
                                    Open CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt="" width={525} height={959}/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><NavLink href="http://www.linkedin.com/in/a-l-8970572b2">LinkedIn</NavLink></li>
                    <li><NavLink href="http://github.com/west1155">Github</NavLink></li>
                </ul>
            </div>
            <div className="visible-text">
                <h1>Developer</h1>
            </div>
        </section>
    )
}

export default Hero;