import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ShuffleComponent } from './pages/shuffle/shuffle.component';

export const routes: Routes = [
    {
        path:'',
        component: MainComponent
    },
    {
        path:'shuffle',
        component: ShuffleComponent
    }
];
