import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeFormComponent } from '@features/employee/components/create-employee-form/create-employee-form.component';
import { DialogModule } from 'primeng/dialog';
import { BottomSheetDialogDirective } from '@shared/dialog/directives/bottom-sheet-dialog.directive';
import { CustomCloseEventDirective } from '@shared/dialog/directives/custom-close-event.directive';
import { ConfirmationService } from '@shared/confirmation/services/confirmation.service';
import { NavigatorService } from '@core/routing/services/navigator.service';
import { Route } from '@core/routing/enums/route';

@Component({
  selector: 'app-create-employee-page',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    CreateEmployeeFormComponent,
    BottomSheetDialogDirective,
    CustomCloseEventDirective,
  ],
  templateUrl: './create-employee-page.component.html',
  styleUrls: ['./create-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeePageComponent {
  constructor(
    private readonly confirmation: ConfirmationService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly navigator: NavigatorService
  ) {}

  customCloseEvent = (): void => {
    this.confirmInterruptingAndNavigateToEmployees();
  };

  handleSubmitClickEvent(): void {
    this.navigateToEmployees();
  }

  handleCancelClickEvent(): void {
    this.confirmInterruptingAndNavigateToEmployees();
  }

  handleDialogHide(): void {
    this.navigateToEmployees();
  }

  private navigateToEmployees(): void {
    this.navigator.navigateByRouterLink(provider =>
      provider.routerLink(Route.Employees)
    );
  }

  private confirmInterruptingAndNavigateToEmployees(): void {
    this.confirmation.show(builder =>
      builder
        .title('Potwierdzenie')
        .message('Czy na pewno chcesz przerwać uzupełnianie formularza?')
        .accept(() => this.navigateToEmployees())
        .build()
    );
  }
}
