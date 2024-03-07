import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Component, ElementRef, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { HomeModalComponent } from 'src/app/modules/home/pages/home/components/home-modal/home-modal.component'

@Component({
  selector: 'app-home-subscription',
  templateUrl: './home-subscription.component.html',
  styleUrls: ['./home-subscription.component.scss'],
})
export class HomeSubscriptionComponent {
  subscriptionForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
  })
  emailControl = this.subscriptionForm.get('email')

  @ViewChild('emailInput') emailInput?: ElementRef

  constructor(private modalService: NgbModal) {}

  openModal(): void {
    this.modalService.open(HomeModalComponent, { size: 'xl', centered: true })
  }

  handleFormSubmit(): void {
    if (this.subscriptionForm.invalid) {
      this.emailControl?.markAsTouched()
      this.emailInput?.nativeElement.focus()

      return
    }

    this.subscriptionForm.reset()
    this.openModal()
  }
}
