import { Directive } from '@angular/core';
import { MultiSelect } from 'primeng/multiselect';

@Directive({
  selector: '[appDefaultMultiSelect]',
  standalone: true,
})
export class DefaultMultiSelectDirective {
  constructor(private readonly multiSelect: MultiSelect) {
    this.configureDefaultMultiSelect();
  }

  private configureDefaultMultiSelect(): void {
    this.multiSelect.appendTo = 'body';
    this.multiSelect.filterPlaceHolder = 'Wprowadź wartość';
    this.multiSelect.emptyMessage = 'Brak danych do wyświetlenia';
    this.multiSelect.emptyFilterMessage = 'Brak danych do wyświetlenia';
    this.multiSelect.showClear = true;
    this.multiSelect.styleClass = 'w-100';
  }
}
