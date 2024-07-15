import Image from 'next/image';
import React from 'react';
import {Link} from 'react-scroll'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../public/images/logo.png'
import NavLink from 'next/link'

export const Header = (props: any) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`tp-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                            <div className="mobail-menu">
                                <MobileMenu/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="navbar-header">
                                <NavLink onClick={ClickHandler} className="navbar-brand" href="/">WestSupport</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-1 col-1">
                            <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                <button className="menu-close"><i className="ti-close"></i></button>
                                <ul className="nav navbar-nav mb-2 mb-lg-0">
                                    <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}
                                              offset={-100}>Main</Link></li>
                                    <li><Link activeClass="active" to="project" spy={true} smooth={true} duration={500}
                                              offset={-95}>Portfolio</Link>
                                    </li>
                                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}
                                              offset={-95}>Contacts</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;