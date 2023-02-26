import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '@features/schedule/ui/calendar/calendar.component';

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulePageComponent {}
