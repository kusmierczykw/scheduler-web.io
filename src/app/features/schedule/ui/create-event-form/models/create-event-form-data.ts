import { Uuid } from '@core/common/types/uuid';

export class CreateEventFormData {
  therapists!: Uuid[];
  shortTitle!: string;
}
