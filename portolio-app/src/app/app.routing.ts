import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects/projects.component";
import {StyleguideComponent} from "./styleguide/styleguide.component";
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {HomeComponent} from "./home/home.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about-me', component: AboutmeComponent},
  {path: 'style-guide', component: StyleguideComponent},
  {path: 'home', component: HomeComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
