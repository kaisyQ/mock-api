import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'flows', 
        loadChildren: () => import('./features/flows/routes')
    }
];
