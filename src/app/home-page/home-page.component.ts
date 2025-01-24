import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';  // Import Material Tabs module

@Component({
  selector: 'app-home-page',
  imports: [MatTabsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
