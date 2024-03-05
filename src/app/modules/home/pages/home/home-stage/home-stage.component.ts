import { Component, Input } from '@angular/core'

import { Stage } from 'src/app/modules/home/pages/home/types/stage'

@Component({
  selector: 'app-home-stage',
  templateUrl: './home-stage.component.html',
  styleUrls: ['./home-stage.component.scss'],
})
export class HomeStageComponent {
  @Input() stage!: Stage
}
