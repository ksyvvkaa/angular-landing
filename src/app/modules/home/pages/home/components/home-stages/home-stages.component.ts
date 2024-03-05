import { Component } from '@angular/core'

import stages from 'src/app/modules/home/pages/home/data/stages.json'
import { Stage } from 'src/app/modules/home/pages/home/types/stage'

@Component({
  selector: 'app-home-stages',
  templateUrl: './home-stages.component.html',
  styleUrls: ['./home-stages.component.scss'],
})
export class HomeStagesComponent {
  stages: Stage[] = stages
}
