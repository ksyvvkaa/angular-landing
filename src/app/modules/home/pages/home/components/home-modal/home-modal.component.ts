import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { Component } from '@angular/core'

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.scss'],
})
export class HomeModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  closeModal(): void {
    this.activeModal.close('Cross click')
  }
}
