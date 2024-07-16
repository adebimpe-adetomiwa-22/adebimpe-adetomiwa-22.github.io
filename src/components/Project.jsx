import React from 'react';

const Project = ({ data }) => {
    return (
        <div className="project">
            <div className="project--image">
                <img
                    src={data.image}
                    alt="project banner"
                    title="project banner"
                    className="project--banner"
                />
            </div>
            <div className="project--description">
                <div className="project--title">
                    <h2>{data.name}</h2>
                </div>

                <div className="project--texts">
                    <p>{data.description}</p>
                </div>
                <div className="check-out-project mt-auto text-right">
                    <a
                        target="_blank"
                        href={data.link}
                        className="bg-blue-700 text-blue-50 px-3 py-1 rounded-sm text-xs md:text-sm transition hover:opacity-80"
                    >
                        Explore Further
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
