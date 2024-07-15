import React from "react";
import himg from '/public/images/about/me_ai.webp';
import Image from "next/image";
import {MeTypeWriter} from "@/components/ME/hero-title-typewriter";

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
                                <a href="/" className="theme-btn">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt="" width={525} height={959} />
                </div>
            </div>
            <div className="visible-text">
                <h1>Developer</h1>
            </div>
        </section>
    )
}

export default Hero;