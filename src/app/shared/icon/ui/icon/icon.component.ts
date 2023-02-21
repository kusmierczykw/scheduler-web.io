import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '@shared/icon/enums/icon';
import { IconCssPipe } from '@shared/icon/pipes/icon-css.pipe';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, IconCssPipe],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() icon!: Icon;
}
