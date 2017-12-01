import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects/projects.component";
import {StyleguideComponent} from "./styleguide/styleguide.component";
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {HomeComponent} from "./home/home.component";
import {CitationsComponent} from "./citations/citations.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'citations', component: CitationsComponent},
  {path: 'about-me', component: AboutmeComponent},
  {path: 'style-guide', component: StyleguideComponent},
  {path: 'home', component: HomeComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
