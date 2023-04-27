import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '@shared/image/components/image/image.component';
import { Image } from '@shared/image/enums/image';
import { RouterLink } from '@angular/router';
import { Route } from '@core/routing/routes/enums/route';
import { RouterLinkPipe } from '@core/routing/routes/pipes/router-link.pipe';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, ImageComponent, RouterLink, RouterLinkPipe],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly Image = Image;
  readonly Route = Route;
}
