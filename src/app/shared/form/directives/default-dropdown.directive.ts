import { Directive } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';

@Directive({
  selector: '[appDefaultDropdown]',
  standalone: true,
})
export class DefaultDropdownDirective {
  constructor(private readonly dropdown: Dropdown) {
    this.configureDefaultDropdown();
  }

  private configureDefaultDropdown(): void {
    this.dropdown.styleClass = 'w-100';
    this.dropdown.appendTo = 'body';
    this.dropdown.placeholder = 'Wybierz wartość';
    this.dropdown.emptyFilterMessage = 'Brak danych do wyświetlenia';
    this.dropdown.emptyMessage = 'Brak danych do wyświetlenia';
  }
}
