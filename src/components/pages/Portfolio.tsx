import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import Header from "../Header/Header";
import data from "../../utils/projects.json";
import { Project } from "../../models/Project";

type Props = {
    projects: Project[];
}

const Portfolio: React.FC<Props> = ({projects}) => {

    console.log(data);

    const headingOne = "Portfolio";
    const headingFour = "Selected Works";

    return (
        <>
            <Header headingOne={headingOne} headingFour={headingFour} />
            <ProjectCard 
                imageSrc="string" 
                oddOrEvenHeader="string" 
                oddOrEvenParagraph="string" 
                projectCode="string" 
                projectDescription="string" 
                projectLink="string" 
                projectTitle="string" 
            />
        </>
    )
}

export default Portfolio;