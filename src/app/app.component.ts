import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ActiveService } from './services/active.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute, private active: ActiveService) {}

  ngOnInit() {
    const title = 'title';
    const appTitle = this.titleService.getTitle();
    
    this.router.events.subscribe(() => {
      this.active.setTab(this.router.url);
    });

    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child.snapshot.data[title]) {
            return child.snapshot.data[title];
          }
          return appTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
        // make sure to scroll to top of page on each route change
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
  }
}
