import { CreateEventFormData } from '@features/schedule/components/create-event-form/models/create-event-form-data';

export class CreateEventDialogOutput {
  constructor(readonly data: CreateEventFormData) {}
}
