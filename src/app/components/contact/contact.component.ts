import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navLinkedIn() {
    window.open('https://www.linkedin.com/in/jacob-barnett-721bba149/', '_blank');
  }

  navGitHub() {
    window.open('https://github.com/jtbarnett', '_blank');
  }

  navInstagram() {
    window.open('https://www.instagram.com/jake_barnett6/', '_blank');
  }

  navFacebook() {
    window.open('https://www.facebook.com/profile.php?id=100011372829528', '_blank');
  }
}
