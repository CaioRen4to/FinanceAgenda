import { Routes } from '@angular/router';
import { LoginComponent } from './pages/LoginComponent/login-component/login-component';
import { TelaIncialComponent } from './pages/HomeComponent/tela-incial-component/tela-incial-component';
import { CadastroComponent } from './pages/LoginComponent/cadastro-component/cadastro-component';


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
    path: 'cadastro',
    component: CadastroComponent
},
  { 
    path: 'home', 
    component: TelaIncialComponent
},

];
