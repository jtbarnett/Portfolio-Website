export interface project {
    title: string;
    date: string;
    gitLink: string;
    noGitLink?: boolean;
    hasLink: boolean;
    projectLink?: string;
    description: string;
    tools: string[];
    notLast?: boolean;
    hasImage: boolean;
    image?: string;
    hasDownload: boolean;
    downloadLink?: string;
    downloadText?: string;
}