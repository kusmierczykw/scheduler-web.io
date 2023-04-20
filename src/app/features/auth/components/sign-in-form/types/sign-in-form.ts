import { FormControl } from '@angular/forms';

export type SignInForm = {
  email: FormControl<string>;
  password: FormControl<string>;
};
