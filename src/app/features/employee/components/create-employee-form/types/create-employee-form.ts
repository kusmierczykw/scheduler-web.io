import { FormControl } from '@angular/forms';
import { EmployeeType } from '@features/employee/components/employee-type/enums/employee-type';

export type CreateEmployeeForm = {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  type: FormControl<EmployeeType>;
  phone: FormControl<string>;
};
