import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from '@features/schedule/ui/schedule/schedule.component';

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [CommonModule, ScheduleComponent],
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulePageComponent {}
