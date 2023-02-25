import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import plLocale from '@fullcalendar/core/locales/pl';
import { CalendarOption } from '@fullcalendar/angular/private-types';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {
  options: CalendarOptions = {
    initialView: 'resourceTimeGrid',
    plugins: [
      dayGridPlugin,
      timeGridPlugin,
      resourceTimeGridPlugin,
      interactionPlugin,
    ],
    locale: plLocale,
    allDaySlot: false,
    selectable: true,
    views: {
      resourceTimeGridFourDay: {
        type: 'resourceTimeGrid',
        duration: { days: 1 },
        buttonText: '1 days',
      },
    },
  };

  events: CalendarOption<'events'> = [
    {
      title: 'Teraz',
      allDay: true,
      start: new Date(),
      resourceId: 'be9b1314-3d42-42d4-950b-5b09b1162a65',
    },
  ];

  resources: CalendarOption<'resources'> = [
    { id: 'be9b1314-3d42-42d4-950b-5b09b1162a65', title: 'I-1' },
    { id: '8a9f4cf1-b4c9-461c-929b-5b85e3e6a5d1', title: 'I-2' },
    { id: 'b1b99d5c-0390-49d2-a8dc-66f51e0473b3', title: 'I-3' },
    { id: 'bcdc5dd3-1a47-4d5a-b479-6980ecf99845', title: 'I-4' },
    { id: '032b3f95-84ef-489e-a3e3-ea49b771b48a', title: 'II-1' },
    { id: 'c82e9155-d3ec-421c-9474-e42bed025287', title: 'II-2' },
    { id: '22ed174e-9fb7-4474-a063-86cd54fa241a', title: 'II-3' },
    { id: '15c000e6-45ac-4509-bf66-5532d15ac170', title: 'II-4' },
    { id: 'b33e8a28-694d-4fc9-858b-ff3dd83d9e6a', title: 'II-5' },
    { id: '4ff9df4c-2de9-46be-9923-3cc45c5fbabd', title: 'II-6' },
  ];
}
