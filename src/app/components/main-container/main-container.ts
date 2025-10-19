import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { Sidebar } from '../sidebar/sidebar';
@Component({
  selector: 'app-main-container',
  imports: [ButtonModule, CardModule, Sidebar],
  templateUrl: './main-container.html',
  styleUrl: './main-container.scss'
})
export class MainContainer {
}
