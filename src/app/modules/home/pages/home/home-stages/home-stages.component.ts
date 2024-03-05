import { Component } from '@angular/core'

import { Stage } from 'src/app/modules/home/pages/home/types/stage'

const stages: Stage[] = [
  { id: 1, title: 'Старт', tasks: ['Ліквідація ДАБІ', 'Створення Сервісної служби'] },
  { id: 2, title: 'Березень — Травень 2020', tasks: ['Перехідний період', 'Мораторій на інспекційний держконтроль'] },
  { id: 3, title: 'Червень 2020', tasks: ['Створення ДІМ', 'Запуск нового реєстру'] },
  { id: 4, title: 'Вересень 2020', tasks: ['Державне агентство з питань технічного регулювання у містобудуванні'] },
  { id: 5, title: 'Січень 2021', tasks: ['Запровадження страхування'] },
]

@Component({
  selector: 'app-home-stages',
  templateUrl: './home-stages.component.html',
  styleUrls: ['./home-stages.component.scss'],
})
export class HomeStagesComponent {
  stages: Stage[] = stages
}
