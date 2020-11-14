import React from 'react';
import { Project } from '../../models/Project';

type Props = {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({project}) => {

    return (    
    <div className="wrapper">
    <div className="pad">
      <div className="portfolio-grid" id="about">
        <img src={project.imageSrc} alt={project.projectTitle} />
        <div className="portfolio-style">
          <h2 className={project.oddOrEvenHeader}>{project.projectTitle}</h2>
          <p className={project.oddOrEvenParagraph}>{project.projectDescription}</p>
          <div className="btn-grid">
            <button type="button" value="" className="form-submit btn-visit">
              <a
                href={project.projectLink}
                >Visit</a>
            </button>
            <button type="button" value="" className="form-submit btn-code">
              <a
                href={project.projectCode}
                >Code</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

    );
}

export default ProjectCard;