import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects/projects.component";
import {StyleguideComponent} from "./styleguide/styleguide.component";
import {AboutmeComponent} from "./aboutme/aboutme.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about-me', component: AboutmeComponent},
  {path: 'style-guide', component: StyleguideComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
