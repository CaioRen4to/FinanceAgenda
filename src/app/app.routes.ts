import { Routes } from '@angular/router';
import { LoginComponent } from './pages/LoginComponent/login-component/login-component';
import { TelaIncialComponent } from './pages/HomeComponent/tela-incial-component/tela-incial-component';
import { CadastroComponent } from './pages/LoginComponent/cadastro-component/cadastro-component';
import { FormDadosComponent } from './pages/FormComponent/form-dados-component/form-dados-component';


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
  { 
    path: 'form', 
    component: FormDadosComponent
},

];
