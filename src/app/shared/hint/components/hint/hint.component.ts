import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintComponent {
  @Input() hint!: string;
}
