import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/LoginComponent/login-component/login-component';
import { TelaIncialComponent } from './pages/HomeComponent/tela-incial-component/tela-incial-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Teste');
}
