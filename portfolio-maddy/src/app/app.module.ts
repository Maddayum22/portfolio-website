import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AboutDetailComponent } from './components/about-detail/about-detail.component';
import { HomeProjectsComponent } from './components/home-projects/home-projects.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectListitemComponent } from './components/project-listitem/project-listitem.component';
import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ProjectDetailComponent,
    AboutDetailComponent,
    HomeProjectsComponent,
    ProjectPageComponent,
    ProjectListitemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HighlightJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
