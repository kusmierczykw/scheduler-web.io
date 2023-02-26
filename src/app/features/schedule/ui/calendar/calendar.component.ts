import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import pl from '@fullcalendar/core/locales/pl';
import { CalendarOption } from '@fullcalendar/angular/private-types';
import { CreateEventDialogComponent } from '@features/schedule/ui/create-event-dialog/create-event-dialog.component';
import { CreateEventDialogService } from '@features/schedule/ui/create-event-dialog/services/create-event-dialog.service';
import { CreateEventDialogInput } from '@features/schedule/ui/create-event-dialog/models/create-event-dialog-input';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, CreateEventDialogComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  @ViewChild(FullCalendarComponent) calendar!: FullCalendarComponent;

  options: CalendarOptions = {
    plugins: [interactionPlugin, resourceTimeGridPlugin],
    height: 'auto',
    initialView: 'resourceTimeGridDay',
    selectable: true,
    allDaySlot: false,
    locale: pl,
    headerToolbar: false,
    resourceOrder: 'order',
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      omitZeroMinute: false,
      meridiem: 'short',
    },
    slotMinTime: '08:00:00',
    slotMaxTime: '20:00:00',
    slotLabelInterval: {
      minutes: 60,
    },
    slotDuration: {
      minutes: 15,
    },
    duration: '01:00:00',
    unselectAuto: false,
    select: ({ start, end, resource }) => {
      this.addEventDialog.show(new CreateEventDialogInput()).subscribe({
        next: () => this.calendar.getApi().unselect(),
      });
    },
    eventContent: ({ event }) => {
      const { title, start, end, extendedProps } = event;

      return {
        html: `
          <div class="test">
            <div>${start?.getHours()}:${start?.getMinutes()} - ${end?.getHours()}:${end?.getMinutes()}</div>
            <div>${title}</div>
          </div>
        `,
      };
    },
  };
  events: CalendarOption<'events'> = [];

  resources: CalendarOption<'resources'> = [
    {
      id: 'b49279df-163b-447a-973e-09fb345a0917',
      title: 'I-1',
      order: 1,
    },
    {
      id: '60491f62-8077-4029-8b3f-25bf891410d3',
      title: 'I-2',
      order: 2,
    },
    {
      id: '0acadff9-38b1-4ab3-8505-d4c660b88c7d',
      title: 'I-3',
      order: 3,
    },
    {
      id: 'd1dcf047-de5c-42a0-ae17-61fd7c114563',
      title: 'I-4',
      order: 4,
    },
    {
      id: 'b49279df-163b-447a-973e-09fb345a0917',
      title: 'II-1',
      order: 5,
    },
    {
      id: 'ad8d762d-1854-4f9f-9a8b-4fb76bdd3ca8',
      title: 'II-2',
      order: 6,
    },
    {
      id: '7752c326-959d-448e-b5c1-15dcb4073132',
      title: 'II-3',
      order: 7,
    },
    {
      id: '2a4c9e96-0c4e-4b35-83f6-f340919244b6',
      title: 'II-4',
      order: 8,
    },
    {
      id: '72c1e23f-fdcd-4186-b62e-b267ea29fdb4',
      title: 'II-5',
      order: 9,
    },
    {
      id: '86d08e1a-4b3e-44c0-a19c-adb7843e96b2',
      title: 'II-6',
      order: 10,
    },
  ];

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly addEventDialog: CreateEventDialogService
  ) {}
}
