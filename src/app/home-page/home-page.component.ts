import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';  // Import Material Tabs module
import { RouterModule } from '@angular/router';  // Import RouterModule here

@Component({
  selector: 'app-home-page',
  imports: [MatTabsModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
