import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  output: string = null;
  id: string = null;

  ngOnInit(): void {
    this.router.events.subscribe(async () => {
      this.output = this.router.url;
      if (this.output != null) {
        if (this.output == '/about-me') {
          this.id = 'about';
        }
        else if (this.output == '/experience') {
          this.id = 'experience';
        }
        else if (this.output == '/projects') {
          this.id = 'projects';
        }
        else {
          this.id = 'contact';
        }
      }

      document.getElementById(this.id).style.backgroundColor = '#f5f5f5';
      document.getElementById(this.id).style.color = '#313133';
    });
  }

}
