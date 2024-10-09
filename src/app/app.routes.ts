import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
