import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover');
    //     }, 3000);
    // }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_3sajkhd', form.current, 'Bx573ojJotTWOsLzJ').then(
            () => {
                alert('Congratulations! Your message was successfully sent!');
                window.location.reload(false);
            },
            () => {
                alert('Oups! Failed to send the message, please try again');
            }
        );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={17}
                        />
                    </h1>
                    <p>
                        Hello It's me again, I can help you build a product , feature or website
                        Look through some of my work and experience! If you like what you see and
                        have a project you need coded, don’t hestiate to contact me.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        placeholder="input your name"
                                        type="text"
                                        name="name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="email adress"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="What is the subject of the message?"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="please input the subject in details"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Pascal Kabika M.,
                    <br />
                    Kigali/Rwanda,
                    <br />
                    Kigali City/Remera, KG223ST <br />
                    Gasabo district <br />
                    <br />
                    <span>pascalkabika123@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    );
};

export default Contact;
