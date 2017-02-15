import { FormControl } from '@angular/forms';

export function validateAgeGreaterZeroFactory() {
  return (c: FormControl) => {
    return c.value && c.value > 0 ? null : {
      validateAge: {
        valid: false
      }
    };
  };
}
