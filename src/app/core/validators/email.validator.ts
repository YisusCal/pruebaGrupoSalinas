import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const emailRegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const value = control.value;

  if (value && !emailRegExp.test(value)) {
    return { emailInvalid: true };
  }

  return null;
}