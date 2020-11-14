export class Project {
    imageSrc: string;
    oddOrEvenHeader: string;
    oddOrEvenParagraph: string;
    projectTitle: string;
    projectDescription: string;
    projectLink: string;
    projectCode: string;

    constructor(imageSrc: string, oddOrEvenHeader: string, oddOrEvenParagraph: string, projectTitle: string, projectDescription: string, projectLink: string, projectCode: string) {
        this.imageSrc = imageSrc;
        this.oddOrEvenHeader = oddOrEvenHeader;
        this.oddOrEvenParagraph = oddOrEvenParagraph;
        this.projectTitle = projectTitle;
        this.projectDescription = projectDescription;
        this.projectLink = projectLink;
        this.projectCode = projectCode;
    }
}