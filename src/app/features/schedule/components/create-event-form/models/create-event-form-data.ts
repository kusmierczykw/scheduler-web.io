import { Uuid } from '@core/common/types/uuid';

export class CreateEventFormData {
  constructor(readonly therapists: Uuid[], readonly shortTitle: string) {}
}
