import React, { useContext, useEffect, useRef, useState } from 'react';
import profileImage from '../assets/images/profile-1.jpg';
import { NavbarContext } from '../contexts/NavbarContext';

const Hero = () => {
    const [name, setName] = useState('');
    const initialName = useRef('ADEBIMPE ADETOMIWA');
    const title = useRef();

    // animation
    const [done, setDone] = useState(false);

    // useEffect(() => {
    //     if (done) {
    //         console.log('animation done');
    //     }
    // }, [done]);

    useEffect(() => {
        let text = initialName.current;
        let splitText = text.split('');

        let count = 0;
        let savedName = '';
        let timer = setInterval(() => {
            if (count >= splitText.length) {
                stop();
                return;
            }
            savedName += splitText[count];
            setName(savedName);
            count++;
        }, 100);

        const stop = () => {
            clearInterval(timer);
            timer = null;
            setDone(true);
        };
    }, []);

    const { showNavbar, setShowNavbar } = useContext(NavbarContext);
    return (
        <section className="hero pt-9 bg-slate-900 text-slate-50">
            <div className="container w-full h-72">
                <div className="title-and-description w-full flex flex-col gap-3">
                    <div className="title w-full flex flex-col items-center text-gray-400 transition-all md:items-start">
                        <p>I am</p>
                        <h2
                            className="text-2xl font-bold text-gray-50"
                            id="title"
                            ref={title}
                        >
                            {name}
                        </h2>
                    </div>
                    <div
                        className={
                            done
                                ? 'description active'
                                : 'description not-active'
                        }
                    >
                        <p className="text-sm text-gray-400">
                            A Developer Specializing in Creating Stunning Web
                            Applications.
                        </p>
                        <a
                            href="#projects"
                            onClick={(event) => setShowNavbar(false)}
                            className="text-xs border-2 border-gray-500 text-gray-500 px-5 py-2 rounded-3xl transition-all hover:bg-gray-500 hover:text-gray-50"
                        >
                            Explore My Work{' '}
                            <i className="ml-2 fas fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>

                <div
                    className={
                        done
                            ? 'profile-image active'
                            : 'profile-image not-active'
                    }
                >
                    <img
                        src={profileImage}
                        alt="profile image"
                        title="profile image"
                        className="image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
