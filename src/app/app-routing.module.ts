import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: {title: 'Jacob Barnett'} },
  { path: 'about-me', component: AboutMeComponent, data: {title: 'About Me'} },
  { path: 'experience', component: ExperienceComponent, data: {title: 'Experience'} },
  { path: 'projects', component: ProjectsComponent, data: {title: 'Projects'} },
  { path: 'contact', component: ContactComponent, data: {title: 'Contact'} },
  { path: 'page-not-found', component: PageNotFoundComponent, data: {title: 'Page Not Found'} },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
