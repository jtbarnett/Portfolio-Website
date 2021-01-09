import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IconsComponent } from './components/icons/icons.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ActiveService } from './services/active.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    AboutMeComponent,
    ExperienceComponent,
    IconsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActiveService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
