import { Component } from '@angular/core';
import { StrapiApiService } from '@shared/services/api/strapi-api.service';

@Component({
  selector: 'str-clinical-cohort',
  standalone: true,
  imports: [],
  templateUrl: './clinical-cohort.component.html',
  styleUrl: './clinical-cohort.component.scss'
})
export class ClinicalCohortComponent {
  constructor(private strapiApi: StrapiApiService){}

}
