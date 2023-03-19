import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeType } from '@features/employee/components/employee-type/enums/employee-type';
import { EmployeeTypeProviderService } from '@features/employee/components/employee-type/providers/employee-type-provider.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'employeeType',
  standalone: true,
})
export class EmployeeTypePipe implements PipeTransform {
  constructor(private readonly provider: EmployeeTypeProviderService) {}

  transform(type: EmployeeType): Observable<string> {
    return this.provider.label(type);
  }
}
