import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import {routing} from "./app.routing";
import { MainNavComponent } from './main-nav/main-nav.component';
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import { VanguardProjectComponent } from './projects/vanguard-project/vanguard-project.component';
import { CompanySiteProjectComponent } from './projects/company-site-project/company-site-project.component';
import {project_routing} from "./projects/projects.routing";
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    AboutmeComponent,
    StyleguideComponent,
    MainNavComponent,
    ProjectListingComponent,
    VanguardProjectComponent,
    CompanySiteProjectComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    routing,
    project_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
