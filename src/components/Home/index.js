import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

function Home() {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        Hi, <br /> I am
                        <img src={LogoTitle} alt="software developer" />
                        Pascal Kabika Mpangirwa
                        <br />
                    </h1>
                    <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
