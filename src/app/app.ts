import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Teste } from "./teste/teste";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Teste],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estudos-angular');
}
