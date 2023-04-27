import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { Nillable } from '@core/utils/nil/nillable';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { isNil } from '@core/utils/nil/is-nil';

@Pipe({
  name: 'onlyVisibleMenuItems',
  standalone: true,
})
export class OnlyVisibleMenuItemsPipe implements PipeTransform {
  constructor(private readonly builder: MenuItemBuilderService) {}

  transform(items: MenuItem[]): Observable<MenuItem[]> {
    return this.onlyVisibleItems(items);
  }

  private onlyVisibleItems(items: MenuItem[]): Observable<MenuItem[]> {
    return combineLatest(
      items.map(item =>
        item.visibility$.pipe(
          switchMap(visible => {
            if (!visible) {
              return of(null);
            }

            const { children } = item;

            if (isNil(children)) {
              return of(item);
            }

            const children$ = this.onlyVisibleItems(children);

            return children$.pipe(
              map(children =>
                this.builder
                  .from(item)
                  .children(() => children)
                  .build()
              )
            );
          })
        )
      )
    ).pipe(
      map((items: Nillable<MenuItem>[]) =>
        items.filter(
          (item: Nillable<MenuItem>): item is MenuItem => !isNil(item)
        )
      )
    );
  }
}
