import { Route } from "@angular/router";
import { FlowsComponent } from "./pages/flows/flows.component";
import { FlowsListComponent } from "./components/flows-list/flows-list.component";

const routes: Route[] = [
    {
        path: '',
        component: FlowsComponent,
        children: [
            {
                path: '',
                loadComponent: () => FlowsListComponent
            }
        ]
    }
];


export default routes;