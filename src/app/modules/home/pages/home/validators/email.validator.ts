import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class UniqueEmailValidator {
  constructor(private http: HttpClient) {}

  createValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.http
        .post<{ data: { success: boolean } }>('https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/check-unique-email', {
          email: control.value,
        })
        .pipe(
          map((result) => (result.data.success ? null : { emailNotUnique: true })),
          catchError(() => of(null)),
        )
    }
  }
}
