import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '@shared/image/image.component';
import { Image } from '@shared/image/image';
@Component({
  selector: 'app-application-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './application-logo.component.html',
  styleUrls: ['./application-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationLogoComponent {
  readonly Image = Image;
}
