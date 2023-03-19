import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from '@shared/toast/components/toast/toast.component';
import { ConfirmationComponent } from '@shared/confirmation/components/confirmation/confirmation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, ToastComponent, ConfirmationComponent],
})
export class AppComponent {}
