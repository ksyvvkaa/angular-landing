import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Component } from '@angular/core'

import { HomeModalComponent } from 'src/app/modules/home/pages/home/components'

@Component({
  selector: 'app-home-subscription',
  templateUrl: './home-subscription.component.html',
  styleUrls: ['./home-subscription.component.scss'],
})
export class HomeSubscriptionComponent {
  constructor(private modalService: NgbModal) {}

  openModal(): void {
    this.modalService.open(HomeModalComponent, { size: 'xl', centered: true })
  }
}
