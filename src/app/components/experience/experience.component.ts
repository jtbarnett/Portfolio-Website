import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public exp1: experience = {
    jobTitle: "Software Engineer Co-op",
    company: "Crown Equipment Corporation",
    date: "May 2020 - August 2020",
    location: "New Bremen, Ohio, United States",
    string1: "• Developed company image gallery application with Angular/Node.js",
    string2: "• Interfaced with Express framework to retrieve images from REST API",
    string3: "• Wrote and implemented Unit and Integration Tests for software modules",
    string4: "• Configured build options for project deployment and conducted CI/CD",
    tools: [
      "Angular", "Node.js", "Express.js", "HTML5", "CSS3", "TypeScript", "JavaScript", "Jenkins", "Maven", "Jira", "Confluence", "Bitbucket", "Git", "VS Code"
    ],
    notLast: true
  };

  public exp2: experience = {
    jobTitle: "Software Engineer Co-op",
    company: "Crown Equipment Corporation",
    date: "January 2020 - April 2020",
    location: "New Bremen, Ohio, United States",
    string1: "• Developed service dashboard application with Angular/TypeScript",
    string2: "• Interfaced with REST API frameworks using JSON and Angular",
    string3: "• Reviewed developer code and managed repositories with Jira and Bitbucket",
    string4: "• Performed UI/UX quality assurance reviews and wrote markdowns",
    tools: [
      "Angular", "HTML5", "CSS3", "TypeScript", "JavaScript", "Jira", "Confluence", "Bitbucket", "Git", "Elasticsearch", "Kibana", "VS Code"
    ],
    notLast: true
  };

  public exp3: experience = {
    jobTitle: "Systems Engineer Co-op",
    company: "Emerson",
    date: "January 2018 - June 2018",
    location: "Sidney, Ohio, United States",
    string1: "• Wrote Visual Basic and Python code to automate engineering processes",
    string2: "• Added test data to Oracle database with Oracle SQL Developer",
    string3: "• Utilized Minitab to analyze New Product Development testing",
    string4: "• Constructed presentations on team projects to present to engineering groups",
    tools: [
      "Python", "Visual Basic", "Oracle", "Teamcenter", "Excel", "Word", "PowerPoint", "Outlook"
    ],
    notLast: true
  };

  public exp4: experience = {
    jobTitle: "Shift Manager",
    company: "Subway",
    date: "April 2018 - August 2016",
    location: "Anna, Ohio, United States",
    string1: "• Ensured the satisfaction of all customers",
    string2: "• Maintained a professional work environment",
    string3: "• Trained new hires of the standards that we conducted service",
    string4: "• Kept records of all transactions and deposited profits at local banks",
    tools: [
      "None"
    ]
  };

  public list: experience[] = [
    this.exp1, this.exp2, this.exp3, this.exp4
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
