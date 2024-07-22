import { Routes } from '@angular/router';
import { ComicsComponent } from './pages/comics/comics.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: ComicsComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: '**', component: LoginComponent },
];
