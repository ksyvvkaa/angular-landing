import { Observable } from 'rxjs'

import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Component, ElementRef } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

import { BaseFormComponent } from 'src/app/core/abstracts/base-form.component'

import { UniqueEmailValidator } from 'src/app/modules/home/pages/home/validators/email.validator'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss'],
})
export class HomeFormComponent extends BaseFormComponent {
  formGroup: FormGroup
  emailControl: AbstractControl | null
  hasServerError = false

  constructor(
    protected elementRef: ElementRef,
    protected formBuilder: FormBuilder,
    private http: HttpClient,
    private uniqueEmailValidator: UniqueEmailValidator,
  ) {
    super()
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [this.uniqueEmailValidator.createValidator()]],
    })
    this.emailControl = this.formGroup.get('email')
  }

  prepareRequest(): Observable<unknown> {
    const email = this.emailControl?.value

    return this.http.post<unknown>('https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/create', { email })
  }

  override onRequestFailed(errorResponse: HttpErrorResponse): void {
    if (!environment.production) {
      // eslint-disable-next-line no-console
      console.log(errorResponse)
    }

    this.setFormErrors(errorResponse)
    this.sentFailed.emit(this.formGroup.errors)

    this.hasServerError = true
    setTimeout(() => (this.hasServerError = false), 3000)
  }

  override submit(): void {
    this.submitPrepare()

    if (this.formGroup.status !== 'PENDING') {
      this.handleSubmit()

      return
    }

    const statusChangesSubscription = this.formGroup.statusChanges.subscribe((newStatus) => {
      if (newStatus !== 'PENDING') {
        this.handleSubmit()
        statusChangesSubscription.unsubscribe()
      }
    })
  }

  private handleSubmit(): void {
    if (this.formGroup.valid) {
      this.isPending = true
      this.send()
    } else {
      this.scrollToError()
      this.focusInvalidInput()
    }
  }
}
