import { Routes } from '@angular/router';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { AboutMeComponent } from '../app/about-me/about-me.component';
import { DocumentsComponent } from '../app/documents/documents.component';
import { SkillsComponent } from '../app/skills/skills.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'skills', component: DocumentsComponent },
  { path: 'documents', component: SkillsComponent },

];
