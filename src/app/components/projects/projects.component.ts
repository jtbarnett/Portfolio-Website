import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public project1: project = {
    title: "Angular Realtor Website",
    date: "March 2020 - July 2020",
    gitLink: "github.com/jtbarnett/RealtorJohnBarnett",
    hasLink: true,
    projectLink: "realtorjohnbarnett.com",
    description: "I developed this SPA (single page application) with Angular CLI version 8.3.23 and later updated it to version 10.0.3. I properly set up the domain, hosting, and SSL/TLS certificates.",
    tools: [
      "Angular", "Node.js", "HTML5", "CSS3", "TypeScript", "JavaScript", "Git", "GitHub", "VS Code", "Karma", "PayPal APIs"
    ],
    notLast: true
  };

  public project2: project = {
    title: "Java Minesweeper Game and GUI",
    date: "October 2020 - December 2020",
    gitLink: "github.com/jtbarnett/Java-Minesweeper",
    hasLink: false,
    description: "Created a Minesweeper game and full GUI with Eclipse 20.12.0, JDK 15.0.1, JavaFX 15, JFrame, JPanel, and Swing.",
    tools: [
      "Java", "JDK", "Eclipse", "JavaFX", "JFrame", "JPanel", "Swing", "Git", "GitHub"
    ],
    notLast: true
  };

  public project3: project = {
    title: "Python Snake Game",
    date: "July 2020 - September 2020",
    gitLink: "github.com/jtbarnett/Python-SnakeGame",
    hasLink: false,
    description: "Wrote the snake game with Python version 3.9.1 and Pygame version 2.0.1 in Visual Studio Code.",
    tools: [
      "Python", "Pygame", "VS Code", "Git", "GitHub"
    ],
    notLast: true
  };

  public project4: project = {
    title: "Python/Docker Web Scraper",
    date: "December 2020 - January 2021",
    gitLink: "github.com/jtbarnett/PythonWebScraping",
    hasLink: false,
    description: "Searches the list of tops movies on the IMDB website and recommends one to you. Deployed with Python version 3.9.1 and Docker version 20.10.0.",
    tools: [
      "Python", "Docker", "VS Code", "Git", "GitHub"
    ],
    notLast: true
  };

  public project5: project = {
    title: "C++ and OpenGL Texture Mapping",
    date: "October 2020 - December 2020",
    gitLink: "github.com/jtbarnett/EECS4530",
    hasLink: false,
    description: "Texture and procedural mapping with C++ and OpenGL. Utilized the FreeGLUT and GLEW libraries as well. The program draws two rotating cubes to the display. One with a PNG image mapped to it and the other with a brick texture mapped by procedural texturing.",
    tools: [
      "C++", "OpenGL", "FreeGLUT", "GLEW", "Visual Studio", "Git", "GitHub"
    ],
    notLast: true
  };

  public project6: project = {
    title: "Python/Docker/FastAPI Web App",
    date: "December 2020 - January 2021",
    gitLink: "github.com/jtbarnett/Docker-FastAPI",
    hasLink: false,
    description: "Built with Python version 3.9.1 and Docker version 20.10.0. The purpose was to create a simple web application with Python and FastAPI. The project can be deployed with Docker.",
    tools: [
      "Python", "Docker", "FastAPI", "VS Code", "Git", "GitHub"
    ],
    notLast: true
  };

  public project7: project = {
    title: "Digital Piano with C",
    date: "November 2020 - December 2020",
    gitLink: "github.com/jtbarnett/Embedded-Systems-Projects",
    hasLink: false,
    description: "I built a digital piano in C with the use of DAC (digital to analog converter). The program can play 4 different piano notes and it can play in either simulation with the Keil IDE or one the TM4C Microcontroller.",
    tools: [
      "C", "ARM Assembly", "Keil uVision4", "Texas TM4C", "Git", "GitHub"
    ],
    notLast: false
  };

  public list: project[] = [
    this.project1, this.project2, this.project3, this.project4, this.project5, this.project6, this.project7
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  navWeb(input: string) {
    window.open('https://' + input, '_blank');
  }
}