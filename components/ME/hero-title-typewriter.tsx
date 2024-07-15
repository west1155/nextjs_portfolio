"use client"
import Typewriter from "typewriter-effect";
import React from "react";

export const MeTypeWriter = () => {
    return (
        <div className="tp-hero-title">
            <h2>
                <Typewriter options={{
                    strings: ['Creative person', 'Web developer'],
                    autoStart: true,
                    loop: true,
                }}/>
            </h2>
        </div>
    )
}