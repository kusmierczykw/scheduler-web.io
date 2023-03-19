import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '@shared/image/components/image/image.component';
import { Image } from '@shared/image/enums/image';
import { RouterLink } from '@angular/router';
import { Route } from '@core/routing/enums/route';
import { RouterLinkPipe } from '@core/routing/pipes/router-link.pipe';

@Component({
  selector: 'app-application-logo',
  standalone: true,
  imports: [CommonModule, ImageComponent, RouterLink, RouterLinkPipe],
  templateUrl: './application-logo.component.html',
  styleUrls: ['./application-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationLogoComponent {
  readonly Image = Image;
  readonly Route = Route;
}
