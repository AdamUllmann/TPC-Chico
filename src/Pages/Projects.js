import React, { useState } from 'react';
import projectsData from '../DataFiles/ProjectsData';
import '../CSS/Projects.css';

function Projects() {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const openFullscreen = (image) => {
        setFullscreenImage(image);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <div className="ProjectBody">
            <ul className="ProjectList">
                {projectsData.map((project, index) => (
                    <li key={index} className="ProjectElement">
                        <div className="ProjectColumn">
                            <div className="ProjectHeader">
                                <h1 className="ProjectMaker">{project.name}</h1>
                                <h1 className='ProjectTitle'>
                                    <a href={project.githubLink} rel="noreferrer" target='_blank'>{project.title}</a>
                                </h1>
                            </div>
                            <p className='ProjectDescription'>{project.description}</p>
                        </div>
                        <div className="ProjectColumn">
                            <img
                                className='ProjectImage'
                                src={project.image}
                                alt={project.title}
                                onClick={() => openFullscreen(project.image)}
                            />
                        </div>
                    </li>
                ))}
            </ul>

            {fullscreenImage && (
                <div className="FullscreenOverlay" onClick={closeFullscreen}>
                    <img className="FullscreenImage" src={fullscreenImage} alt="Fullscreen" />
                </div>
            )}
        </div>
    );
}

export default Projects;
