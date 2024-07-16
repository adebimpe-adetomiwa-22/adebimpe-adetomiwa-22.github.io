import React, { useState } from 'react';
import Project from './Project';

// images
import calculatorImage from '../assets/images/calculator.jpg';
import todoImage from '../assets/images/todo.jpg';

const Projects = () => {
    const [projects, setProjects] = useState([
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
        <Project key={index} data={element} />
    ));

    return (
        <section className="projects m-cover" id="projects">
            <div className="container">
                <div className="projects--title">
                    <h2 className="m-title">MY PROJECTS</h2>
                </div>

                <div className="all-projects">
                    {/* {<Project />} */}
                    {projectsElements}
                </div>
            </div>
        </section>
    );
};

export default Projects;
