import { Routes } from '@angular/router';
import { LoginComponent } from './pages/LoginComponent/login-component/login-component';
import { TelaIncialComponent } from './pages/HomeComponent/tela-incial-component/tela-incial-component';


export const routes: Routes = [
  { 
    path: '', redirectTo: 'login', 
    pathMatch: 'full' 
}, 
  { 
    path: 'login', 
    component: LoginComponent 
},
  { 
    path: 'home', 
    component: TelaIncialComponent
},

];
