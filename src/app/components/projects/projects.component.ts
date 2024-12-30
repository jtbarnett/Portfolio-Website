import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public aslApp: project = {
    title: "Angular ASL Virtual Game",
    date: "January 2021 - March 2021",
    gitLink: "github.com/jtbarnett/ASL-Application",
    hasLink: false,
    description: "I developed an American Sign Language (ASL) virtual game in Angular for a Senior Design project with Angular CLI version 10.0.3. You are able to play locally, host a game, or join an existing game by room code. The backend is set up with Node.js, Express.js, Socket.IO (client to client communication), and AWS S3 (Sign Language images and videos). The application is deployed on AWS and the server is hosted on an EC2 instance.",
    tools: [
      "Angular", "Node.js", "Express.js", "Socket.IO", "HTML5", "CSS3", "TypeScript", "JavaScript", "AWS", "S3", "CloudFront", "Route 53", "EC2 Server", "Git", "GitHub", "VS Code", "Karma", "Jasmine"
    ],
    notLast: true,
    hasImage: true,
    image: "/assets/img/asl.png",
    hasDownload: false
  };

  public realtorWebsite: project = {
    title: "Angular Realtor Website",
    date: "March 2020 - July 2020",
    gitLink: "github.com/jtbarnett/RealtorJohnBarnett",
    hasLink: true,
    projectLink: "realtorjohnbarnett.com",
    description: "I developed this SPA (single page application) with Angular CLI version 8.3.23 and later updated it to version 10.0.3. I properly set up the domain, hosting, and SSL/TLS certificates.",
    tools: [
      "Angular", "Node.js", "HTML5", "CSS3", "TypeScript", "JavaScript", "AWS", "S3", "CloudFront", "Route 53", "Git", "GitHub", "VS Code", "Karma", "Jasmine", "PayPal APIs"
    ],
    notLast: true,
    hasImage: true,
    image: "/assets/img/realtor.png",
    hasDownload: false
  };

  public minesweeper: project = {
    title: "Java Minesweeper Game",
    date: "October 2020 - December 2020",
    gitLink: "github.com/jtbarnett/Java-Minesweeper",
    hasLink: false,
    description: "Created a Minesweeper game and full GUI with Eclipse 20.12.0, JDK 15.0.1, JavaFX 15, JFrame, JPanel, and Swing.",
    tools: [
      "Java", "JDK", "Eclipse", "JavaFX", "JFrame", "JPanel", "Swing", "Git", "GitHub"
    ],
    notLast: true,
    hasImage: true,
    image: "/assets/img/minesweeper.png",
    hasDownload: true,
    downloadLink: "/assets/downloads/minesweeper1.0.exe",
    downloadText: "minesweeper1.0.exe"
  };

  public snakeGame: project = {
    title: "Python Snake Game",
    date: "July 2020 - September 2020",
    gitLink: "github.com/jtbarnett/Python-SnakeGame",
    hasLink: false,
    description: "Wrote the snake game with Python version 3.9.1 and Pygame version 2.0.1 in Visual Studio Code.",
    tools: [
      "Python", "Pygame", "VS Code", "Git", "GitHub"
    ],
    notLast: true,
    hasImage: true,
    image: "/assets/img/snake.png",
    hasDownload: true,
    downloadLink: "/assets/downloads/snakegame1.0.exe",
    downloadText: "snakegame1.0.exe"
  };

  public airline: project = {
    title: "C# Airline Reservation System",
    date: "January 2021 - March 2021",
    gitLink: "Built in Private GitHub Organization",
    noGitLink: true,
    hasLink: false,
    description: "Airline Reservation System built with C# and .Net Core version 3.1. Utilized Windows Forms for the GUI, backend was built with C#, and Microsoft SQL Server utlized for the relational database. This project was built for a Software Engineering course.",
    tools: [
      "C#", ".Net", ".Net Core", "WinForms", "SQL Server", "Visual Studio 2019", "Git", "GitHub"
    ],
    notLast: true,
    hasImage: false,
    hasDownload: false
  };

  public webScraper: project = {
    title: "Python/Docker Web Scraper",
    date: "December 2020 - January 2021",
    gitLink: "github.com/jtbarnett/PythonWebScraping",
    hasLink: false,
    description: "Searches the list of tops movies on the IMDB website and recommends one to you. Deployed with Python version 3.9.1 and Docker version 20.10.0.",
    tools: [
      "Python", "Docker", "VS Code", "Git", "GitHub"
    ],
    notLast: true,
    hasImage: false,
    hasDownload: false
  };

  public textureMapping: project = {
    title: "C++/OpenGL Texture Mapping",
    date: "October 2020 - December 2020",
    gitLink: "github.com/jtbarnett/EECS4530",
    hasLink: false,
    description: "Texture and procedural mapping with C++ and OpenGL. Utilized the FreeGLUT and GLEW libraries as well. The program draws two rotating cubes to the display. One with a PNG image mapped to it and the other with a brick texture mapped by procedural texturing.",
    tools: [
      "C++", "OpenGL", "FreeGLUT", "GLEW", "Visual Studio", "Git", "GitHub"
    ],
    notLast: true,
    hasImage: true,
    image: "/assets/img/texture.png",
    hasDownload: false
  };

  public fastAPI: project = {
    title: "Docker/FastAPI Web App",
    date: "December 2020 - January 2021",
    gitLink: "github.com/jtbarnett/Docker-FastAPI",
    hasLink: false,
    description: "Built with Python version 3.9.1 and Docker version 20.10.0. The purpose was to create a simple web application with Python and FastAPI. The project can be deployed with Docker.",
    tools: [
      "Python", "Docker", "FastAPI", "VS Code", "Git", "GitHub"
    ],
    notLast: true,
    hasImage: false,
    hasDownload: false
  };

  public digitalPiano: project = {
    title: "Digital Piano",
    date: "November 2020 - December 2020",
    gitLink: "github.com/jtbarnett/Embedded-Systems-Projects",
    hasLink: false,
    description: "I built a digital piano in C with the use of DAC (digital to analog converter). The program can play 4 different piano notes and it can play in either simulation with the Keil IDE or one the TM4C Microcontroller.",
    tools: [
      "C", "ARM Assembly", "Keil uVision4", "Texas TM4C", "Git", "GitHub"
    ],
    notLast: true,
    hasImage: false,
    hasDownload: false
  };

  public trafficLight: project = {
    title: "Traffic Light Controller",
    date: "October 2020 - November 2020",
    gitLink: "github.com/jtbarnett/Embedded-Systems-Projects",
    hasLink: false,
    description: "I built a traffic light controller based on an intersection of cars traveling North/South and East/West with one pedestrian walkway. There are three sensors set up (with switches on the real board) to detect if a car is sitting at a red light or a pedestrian pressed the walk button (they have to hold for at least 2 seconds).",
    tools: [
      "C", "ARM Assembly", "Keil uVision4", "Texas TM4C", "Git", "GitHub"
    ],
    notLast: false,
    hasImage: true,
    image: "/assets/img/lights.png",
    hasDownload: false
  };

  public list: project[] = [
    this.aslApp, this.realtorWebsite, this.minesweeper, this.snakeGame, this.airline, this.webScraper, this.textureMapping, this.fastAPI, this.digitalPiano, this.trafficLight
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  navWeb(input: string) {
    window.open('https://' + input, '_blank');
  }
}
