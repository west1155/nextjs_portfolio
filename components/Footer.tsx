import React from 'react'
import {GlobalSvgSelector} from "@/components/GlobalSvgSelector";


const Footer = () => {

    const skills_svg = ['html_logo', 'css_logo', 'js_logo', 'react_logo', 'java_logo', 'docker_logo', 'git_logo',
        'nextjs_logo', 'storybook_logo', 'sass_logo', 'ts_logo'];

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__logo">
                            </div>
                            <p>Our vision is simple, we want to create websites and applications with both high quality design and easy access to content. The finished product will be totally unique and represent awesomeness.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Quick links</h6>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Support</h6>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Term</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Address</h6>
                            <p>123, Chalingt Gates, Vitoria, Australia</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;