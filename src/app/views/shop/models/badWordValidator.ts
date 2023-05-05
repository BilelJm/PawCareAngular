import { AbstractControl, ValidatorFn } from '@angular/forms';

export function badwordValidator(badWords: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      const words = control.value.toLowerCase().split(' ');
      for (const word of words) {
        if (badWords.includes(word)) {
          return { badword: { value: control.value } };
        }
      }
    }
    return null;
  };
}
