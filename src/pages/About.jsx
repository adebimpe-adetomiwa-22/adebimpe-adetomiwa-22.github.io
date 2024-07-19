import React from 'react';
import aboutImage from '../assets/images/about-profile-1.jpg';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about--title">
                    <h2 className="m-title">ABOUT ME</h2>
                </div>

                <div className="about-text">
                    <Fade>
                        <p className="paragraph">
                            Hi, I'm Adebimpe Adetomiwa! I&apos;m a passionate
                            software developer specializing in front-end web
                            development. With a strong foundation in HTML, CSS,
                            SCSS, JavaScript, and React, I craft intuitive and
                            visually appealing web applications that provide
                            users with seamless experiences.
                        </p>
                    </Fade>
                    <div className="md:translate-x-1/2 xl:translate-x-full bg-slate-900 py-5 rounded-lg md:mr-5 lg:mr-0">
                        <Fade>
                            <h2 className="sub-title">Who Am I?</h2>
                            <p className="paragraph">
                                I&apos;m a <noscript>dedicated</noscript>{' '}
                                developer with a love for creating elegant and
                                functional web solutions. My journey in tech
                                began with a fascination for the web and its
                                limitless possibilities. Over the years,
                                I&apos;ve honed my skills through hands-on
                                projects, continuous learning, and a deep
                                curiosity about the latest technologies. I
                                thrive on solving complex problems and turning
                                ideas into reality. Whether it's building
                                responsive user interfaces or implementing
                                dynamic features, I&apos;m excited by the
                                challenge of delivering high-quality, innovative
                                web applications.
                            </p>
                        </Fade>
                    </div>

                    <div>
                        <Fade>
                            <h2 className="sub-title">What I Do</h2>
                            <p>
                                I specialize in front-end development, focusing
                                on creating clean, responsive, and user-friendly
                                web applications. My expertise includes:
                            </p>
                            <ul className="text-sm list-disc flex flex-col gap-2 mt-3">
                                <li>
                                    <span>HTML</span>: Crafting the structure
                                    and semantics of web pages for a strong
                                    foundation.
                                </li>
                                <li>
                                    <span>CSS</span>: Crafting the structure and
                                    semantics of web pages for a strong
                                    foundation.
                                </li>
                                <li>
                                    <span>SCSS</span>: Crafting the structure
                                    and semantics of web pages for a strong
                                    foundation.
                                </li>
                                <li>
                                    <span>JavaScript</span>: Crafting the
                                    structure and semantics of web pages for a
                                    strong foundation.
                                </li>
                                <li>
                                    <span>React</span>: Crafting the structure
                                    and semantics of web pages for a strong
                                    foundation.
                                </li>
                            </ul>
                            <p className="paragraph">
                                I&apos;m particularly interested in the
                                intersection of design and development, where
                                creativity meets technology. I enjoy creating
                                solutions that are not only functional but also
                                visually appealing.
                            </p>
                        </Fade>
                    </div>

                    <div className="md:translate-x-1/2 xl:translate-x-full bg-slate-900 py-7 rounded-lg md:mr-5 lg:mr-0">
                        <Fade>
                            <h2 className="sub-title">My Approach</h2>
                            <p className="paragraph">
                                My approach to web development is centered
                                around these core principles:
                            </p>
                            <ul className="text-sm list-disc flex flex-col gap-2 mt-3">
                                <li>
                                    <span>User-Centric Design</span>: I believe
                                    that great web experiences start with
                                    understanding the user&apos;s needs. I
                                    design with empathy and focus on usability
                                    to create interfaces that are both engaging
                                    and accessible.
                                </li>
                                <li>
                                    <span>Clean Code</span>: Writing clean,
                                    readable, and maintainable code is essential
                                    for long-term project success. I follow best
                                    practices and continuously seek to improve
                                    my coding techniques.
                                </li>
                                <li>
                                    <span>Continuous Learning</span>: The tech
                                    field is always evolving, and so am I. I
                                    stay updated with the latest trends and
                                    technologies through courses, blogs, and
                                    community involvement.
                                </li>
                                <li>
                                    <span>Collaborative Spirit</span>: I value
                                    teamwork and enjoy collaborating with other
                                    developers, designers, and stakeholders to
                                    achieve shared goals.
                                </li>
                            </ul>
                        </Fade>
                    </div>
                </div>

                {/* <div className="about--image">
                    <img
                        src={aboutImage}
                        alt="about image"
                        title="about image"
                        id="about--image"
                        className="image"
                    />
                </div> */}
            </div>
        </section>
    );
};

export default About;
