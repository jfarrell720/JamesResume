import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';  // Import RouterModule here
import { HomePageComponent } from './home-page/home-page.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component'; 
import { DocumentsComponent } from './documents/documents.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet, MatTabsModule, RouterModule, SkillsComponent, HomePageComponent, AboutMeComponent, DocumentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JamesResume';

  constructor(private router: Router) {}

  onTabChange(event: any) {
    const tabIndex = event.index; // Get the selected tab index
    if (tabIndex === 0) {
      this.router.navigate(['/aboutme']);
    } else if (tabIndex === 1) {
      this.router.navigate(['/skills']);
    } else if (tabIndex === 2) {
      this.router.navigate(['/documents']);
    }
  }
}
