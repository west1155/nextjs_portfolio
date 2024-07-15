import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo.png'
import Image from 'next/image'
import {GlobalSvgSelector} from "@/components/GlobalSvgSelector";

const Footer = (props: any) => {

    const skills_svg = ['html_logo', 'css_logo', 'js_logo', 'react_logo', 'java_logo', 'css_logo', 'git_logo',
        'nextjs_logo', 'storybook_logo', 'sass_logo', 'ts_logo'];


    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo" href="/"><Image src={Logo} alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                {skills_svg.map((svg, index) => (
                                    <li key={index}>
                                        <GlobalSvgSelector svg={svg}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© 2023. All rights reserved by themepresss.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;