import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    AboutmeComponent,
    StyleguideComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
