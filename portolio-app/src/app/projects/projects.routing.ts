import {RouterModule, Routes} from "@angular/router";
import {VanguardProjectComponent} from "./vanguard-project/vanguard-project.component";
import {CompanySiteProjectComponent} from "./company-site-project/company-site-project.component";
import {ProjectsComponent} from "./projects.component";
import {HaidaNowProjectComponent} from "./haida-now-project/haida-now-project.component";

const PROJECT_ROUTES: Routes = [
  {
    path: 'projects', children: [
    {path: '', component: ProjectsComponent},
    {path: 'vanguard', component: VanguardProjectComponent},
    {path: 'company-site', component: CompanySiteProjectComponent},
    {path: 'haida-now', component: HaidaNowProjectComponent}
  ]
  },

];
export const project_routing = RouterModule.forRoot(PROJECT_ROUTES);
