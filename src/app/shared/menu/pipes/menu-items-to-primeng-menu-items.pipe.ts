import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem as PrimengMenuItem } from 'primeng/api';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItemToPrimengMenuItemConverterService } from '@shared/menu/converters/menu-item-to-primeng-menu-item-converter.service';

@Pipe({
  name: 'menuItemsToPrimengMenuItems',
  standalone: true,
})
export class MenuItemsToPrimengMenuItemsPipe implements PipeTransform {
  constructor(
    private readonly converter: MenuItemToPrimengMenuItemConverterService
  ) {}

  transform(items: MenuItem[]): PrimengMenuItem[] {
    return items.map(item => this.converter.convert(item));
  }
}
