import { Injectable } from '@angular/core';
import { ConfirmationBuilderService } from '@shared/confirmation/builders/confirmation-builder.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor(private readonly builder: ConfirmationBuilderService) {}
}
