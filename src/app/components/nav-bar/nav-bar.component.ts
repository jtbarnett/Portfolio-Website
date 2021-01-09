import { Component, OnInit } from '@angular/core';
import { ActiveService } from '../../services/active.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private active: ActiveService) { }

  output: string = null;
  id: string = null;

  ngOnInit(): void {
    this.output = this.active.getTab();

    if (this.output == '/about-me') {
      this.id = 'about';
    }
    else if (this.output == '/experience') {
      this.id = 'experience';
    }
    else if (this.output == '/projects') {
      this.id = 'projects';
    }
    else if (this.output == '/contact') {
      this.id = 'contact';
    }

    document.getElementById(this.id).style.backgroundColor = '#f5f5f5';
    document.getElementById(this.id).style.color = '#313133';
  }
}
