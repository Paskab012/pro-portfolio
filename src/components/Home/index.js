import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

function Home() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['', ' P', 'a', 's', 'c', 'a', 'l', ' ', 'k', 'a', 'b', 'i', 'k', 'a'];
    const jobArray = [
        'F',
        'u',
        'l',
        'l',
        '-',
        's',
        't',
        'a',
        'c',
        'k',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
    ];

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover');
    //     }, 3000);
    // }, []);
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={20} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26} />
                    </h1>
                    <h2>
                        React/ Redux/ Typescript/ NodeJs/ Ruby on rails/ Django <br />
                        <br />
                        I’m a full-stack software developer! I can help you build a product ,
                        feature or website. Look through some of my work and experience! If you like
                        what you see and have a project you need coded, don’t hestiate to contact
                        me.
                    </h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
        </>
    );
}

export default Home;
