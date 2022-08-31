import { useEffect, useState } from 'react';
import {
    faNodeJs,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover');
    //     }, 3000);
    // }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={16}
                        />
                    </h1>
                    <p>
                        As a full-stack software developer! I can help you build a product , feature
                        or website. Look through some of my work and experience! If you like what
                        you see and have a project you need coded, don’t hestiate to contact me.
                    </p>
                    <br></br>
                    <p align="LEFT">
                        I'm a very ambitious full-stack developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <br></br>
                    <p>
                        Defining myself in one sentence that would be a family person, a sports
                        fanatic, technical enthusiast, quick learner, enjoy discovering and
                        tech-obsessed!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    );
};

export default About;
