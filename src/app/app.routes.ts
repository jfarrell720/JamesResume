import { Routes } from '@angular/router';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { AboutMeComponent } from '../app/about-me/about-me.component';
import { DocumentsComponent } from '../app/documents/documents.component';
import { SkillsComponent } from '../app/skills/skills.component';
import { ContactmeComponent } from './contactme/contactme.component';

export const appRoutes: Routes = [
  // { path: '', component: HomePageComponent },
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'contactme', component: ContactmeComponent },
];
