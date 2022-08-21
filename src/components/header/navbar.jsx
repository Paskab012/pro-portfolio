import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="n-wrapper" id="Navbar">
            {/* left */}
            <div className="n-left">
                <div className="n-name">PASCAL</div>
                {/* <Toggle /> */}
            </div>
            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li className="home">
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>
                        <li>
                            <Link to="works" spy={true} smooth={true}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true}>
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                    <div class="login-box">
                        <div className="btn">
                            <a href="/">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Contacts
                            </a>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
