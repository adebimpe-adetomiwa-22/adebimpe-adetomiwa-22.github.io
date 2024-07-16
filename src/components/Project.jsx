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
            </div>
        </div>
    );
};

export default Project;
