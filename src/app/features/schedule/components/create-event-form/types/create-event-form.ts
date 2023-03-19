import { FormControl } from '@angular/forms';
import { Uuid } from '@core/common/types/uuid';

export type CreateEventForm = {
  therapists: FormControl<Uuid[]>;
  shortTitle: FormControl<string>;
};
