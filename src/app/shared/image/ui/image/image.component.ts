import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUrlPipe } from '@shared/image/pipes/image-url.pipe';
import { Image } from '@shared/image/image';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, ImageUrlPipe],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @Input() image!: Image;
  @Input() alt!: string;
  @Input() width = 'auto';
  @Input() height = 'auto';
}
