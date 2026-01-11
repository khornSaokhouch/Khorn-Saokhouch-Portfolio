import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html'
})
export class EducationComponent {
  education = [
    {
      year: '2010 — 2016',
      degree: 'Primary School Certificate',
      university: 'Hun Sen Banoy Primary School',
      location: 'Takeo Province, Cambodia',
      description: 'Successfully completed primary education.'
    },
    {
      year: '2017 — 2019',
      degree: 'Lower Secondary School Diploma',
      university: 'Banoy High School',
      location: 'Takeo Province, Cambodia',
      description: 'Graduated from lower secondary school.'
    },
    {
      year: '2020 — 2022',
      degree: 'High School Diploma (Bac II)',
      university: 'Banoy High School',
      location: 'Takeo Province, Cambodia',
      description: 'Successfully completed high school education (Bac II).'
    },
    {
      year: '2022 — 2026',
      degree: 'Bachelor of Information Technology Engineering (ITE)',
      university: 'Royal University of Phnom Penh (RUPP)',
      location: 'Phnom Penh, Cambodia',
      description: 'Year 4 student majoring in Information Technology Engineering.'
    }
  ];
}
