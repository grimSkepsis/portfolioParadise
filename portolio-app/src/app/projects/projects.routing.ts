import {RouterModule, Routes} from "@angular/router";
import {VanguardProjectComponent} from "./vanguard-project/vanguard-project.component";
import {CompanySiteProjectComponent} from "./company-site-project/company-site-project.component";
import {ProjectsComponent} from "./projects.component";

const PROJECT_ROUTES: Routes = [
  {path: 'projects', children: [
    {path: '', component:ProjectsComponent},
    {path: 'vanguard', component:VanguardProjectComponent},
    {path: 'company-site', component:CompanySiteProjectComponent}
  ]},

];
export const project_routing = RouterModule.forRoot(PROJECT_ROUTES);
