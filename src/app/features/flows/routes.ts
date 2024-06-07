import { Route } from "@angular/router";
import { FlowsComponent } from "./pages/flows/flows.component";
import { FlowsListComponent } from "./components/flows-list/flows-list.component";
import { FlowAboutComponent } from "./pages/flow-about/flow-about.component";

const routes: Route[] = [
    {
        path: '',
        component: FlowsComponent,
        children: [
            {
                path: '',
                loadComponent: () => FlowsListComponent
            }
        ],
    },
    {
        path: ':slug',
        loadComponent: () => FlowAboutComponent
    }
];


export default routes;