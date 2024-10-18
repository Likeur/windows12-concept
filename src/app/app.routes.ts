import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'accountselection',
        title:'account',
        loadComponent: () => import('./components/accountselection/accountselection.component')
    },
    {
        path:'home',
        title:'Win 12',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path:'notfound',
        title:'Win 12',
        loadComponent: () => import('./components/notfound/notfound.component')
    },
    {
        path:'',
        redirectTo:'accountselection',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'notfound',
        pathMatch:'full'
    },
];
