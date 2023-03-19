import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeType } from '@features/employee/components/employee-type/enums/employee-type';
import { EmployeeTypePipe } from '@features/employee/components/employee-type/pipes/employee-type.pipe';

@Component({
  selector: 'app-employee-type',
  standalone: true,
  imports: [CommonModule, EmployeeTypePipe],
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTypeComponent {
  @Input() type!: EmployeeType;
}
