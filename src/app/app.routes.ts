import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title:'next-destination',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];
