import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
@Component({
  selector: 'app-main-container',
  imports: [Sidebar],
  templateUrl: './main-container.html',
  styleUrl: './main-container.scss'
})
export class MainContainer {
}
