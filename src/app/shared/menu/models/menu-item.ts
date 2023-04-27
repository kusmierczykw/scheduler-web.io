import { MenuItemType } from '@shared/menu/enums/menu-item-type';
import { RouterLink } from '@core/routing/types/router-link';
import { Nillable } from '@core/utils/nil/nillable';
import { Icon } from '@shared/icon/enums/icon';
import { Observable } from 'rxjs';
import { MenuItemCommand } from '@shared/menu/types/menu-item-command';
import { isNil } from '@core/utils/nil/is-nil';

export class MenuItem {
  constructor(
    readonly label: string,
    readonly type: MenuItemType,
    readonly visibility$: Observable<boolean>,
    readonly icon?: Nillable<Icon>,
    readonly routerLink?: Nillable<RouterLink>,
    readonly link?: Nillable<string>,
    readonly children?: Nillable<MenuItem[]>,
    readonly command?: Nillable<MenuItemCommand>
  ) {}

  isLink(): boolean {
    return this.type === MenuItemType.Link;
  }

  isCommand(): boolean {
    return this.type === MenuItemType.Command;
  }

  isMore(): boolean {
    return this.type === MenuItemType.More;
  }

  isRouterLink(): boolean {
    return this.type === MenuItemType.RouterLink;
  }

  hasIcon(): boolean {
    return !isNil(this.icon);
  }
}
