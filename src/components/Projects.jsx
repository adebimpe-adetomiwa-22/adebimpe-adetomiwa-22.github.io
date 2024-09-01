import React, { useState } from 'react';
import Project from './Project';

// images
import calculatorImage from '../assets/images/calculator.jpg';
import todoImage from '../assets/images/todo.jpg';
import tenziesImage from '../assets/images/tenzies.jpg';
import anywearsImage from '../assets/images/anywears.jpg';
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            name: 'AnyWears - E-Commerce Web Application',
            description:
                'AnyWears is a modern e-commerce web application designed to showcase the latest in fashion and accessories. Built with React, Redux Toolkit, Tailwind CSS, and Material UI, AnyWears offers a sleek and responsive user interface that ensures a seamless shopping experience across all devices. The project utilizes the Fakestore API to simulate product listings, a shopping cart, and a checkout process, making it an ideal demonstration of a functional online store without real transactions.',
            link: 'https://adebimpe-adetomiwa-22.github.io/anywears',
            image: anywearsImage,
        },
        {
            name: 'Tenzies Game',
            description:
                'The Tenzies game is a fun and interactive dice game built using modern web development technologies. It offers a delightful user experience with its simple yet engaging gameplay mechanics. This project demonstrates proficiency in front-end development, particularly with HTML, CSS, JavaScript, React, and Tailwind CSS.',
            link: 'https://adebimpe-adetomiwa-22.github.io/tenzies-game',
            image: tenziesImage,
        },
        {
            name: 'Windows 10 Calculator Lite',
            description:
                'The Windows 10 Calculator Clone Lite is a simplified version of the classic Windows 10 Calculator app. This project combines clean design with essential functionality to deliver a user-friendly, interactive calculator experience.This project was an opportunity to challenge myself with a classic app redesign, focusing on essential features and clean design principles. It allowed me to explore the balance between simplicity and functionality in web development.',
            link: 'https://adebimpe-adetomiwa-22.github.io/windows-10-calculator-lite/',
            image: calculatorImage,
        },
        {
            name: 'Todo App',
            description:
                'The To-Do App is a sleek and user-friendly task management application designed to help users organize their daily tasks with ease. Built using React, React Router, and Tailwind CSS, this app combines modern design with essential functionality for efficient task management.',
            link: 'https://adebimpe-adetomiwa-22.github.io/todo-app',
            image: todoImage,
        },
    ]);
    const projectsElements = projects.map((element, index) => (
        <Fade key={index} fraction={0.3}>
            <Project key={index} data={element} />
        </Fade>
    ));

    return (
        <section className='projects m-cover' id='projects'>
            <div className='container'>
                <div className='projects--title'>
                    <h2 className='m-title'>MY PROJECTS</h2>
                </div>

                <div className='all-projects'>
                    {/* {<Project />} */}
                    {projectsElements}
                </div>
            </div>
        </section>
    );
};

export default Projects;
