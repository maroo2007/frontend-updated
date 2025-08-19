import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // Add other routes here in the future
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for a 404-like redirect
];
