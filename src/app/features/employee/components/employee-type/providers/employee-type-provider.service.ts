import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeType } from '@features/employee/components/employee-type/enums/employee-type';
import { SelectItem } from '@shared/select-item/select-item';
import { isNil } from '@core/utils/nil/nillable';
import { EmployeeTypeNotFoundException } from '@features/employee/components/employee-type/exceptions/employee-type-not-found.exception';

@Injectable({
  providedIn: 'root',
})
export class EmployeeTypeProviderService {
  private readonly entries = new Map<EmployeeType, string>([
    [EmployeeType.Therapist, 'Terapeuta'],
  ]);

  selectItems(): Observable<SelectItem<EmployeeType>[]> {
    return of(
      Array.from(this.entries.entries()).map(
        ([type, label]) => new SelectItem(label, type)
      )
    );
  }

  label(type: EmployeeType): Observable<string> {
    const entry = this.entries.get(type);

    if (isNil(entry)) {
      throw new EmployeeTypeNotFoundException();
    }

    return of(entry);
  }
}
