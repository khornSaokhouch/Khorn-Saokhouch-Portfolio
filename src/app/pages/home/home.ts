import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { EducationComponent } from '../education/education';
import { SkillsComponent } from '../skills/skills';
import { ProjectsComponent } from '../projects/projects';
import { ContactComponent } from '../contact/contact';



@Component({
  selector: 'app-home',
  standalone: true,
  // ADD ALL COMPONENTS HERE
  imports: [
    CommonModule,

    HeroComponent,
    AboutComponent,
    EducationComponent,
    ProjectsComponent ,
    SkillsComponent,
    ContactComponent ,

  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  // Logic for the single page
}