import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItemType } from '@shared/menu/enums/menu-item-type';
import { isNil, Nillable } from '@core/utils/nil/nillable';
import { RequireMethodCallException } from '@shared/common/exceptions/require-method-call.exception';
import { RouterLink } from '@core/routing/types/router-link';
import { RouterLinkProviderService } from '@core/routing/providers/router-link-provider.service';
import { Icon } from '@shared/icon/enums/icon';
import { Observable, of } from 'rxjs';
import { MenuItemCommand } from '@shared/menu/types/menu-item-command';

@Injectable({
  providedIn: 'root',
})
export class MenuItemBuilderService {
  private _label!: Nillable<string>;
  private _type!: Nillable<MenuItemType>;
  private _routerLink: Nillable<RouterLink>;
  private _icon: Nillable<Icon>;
  private _link: Nillable<string>;
  private _visibility$: Nillable<Observable<boolean>>;
  private _children: Nillable<MenuItem[]>;
  private _command: Nillable<MenuItemCommand>;

  constructor(private readonly routerLinkProvider: RouterLinkProviderService) {
    this.reset();
  }

  newInstance(): MenuItemBuilderService {
    return new MenuItemBuilderService(this.routerLinkProvider);
  }

  from(item: MenuItem): MenuItemBuilderService {
    const builder = this.newInstance();

    builder._label = item.label;
    builder._type = item.type;
    builder._routerLink = item.routerLink;
    builder._link = item.link;
    builder._visibility$ = item.visibility$;
    builder._icon = item.icon;
    builder._children = item.children;
    builder._command = item.command;

    return builder;
  }

  reset(): this {
    this._label = null;
    this._type = null;
    this._icon = null;
    this._routerLink = null;
    this._link = null;
    this._children = null;
    this._command = null;

    return this;
  }

  initRouterLink(
    routerLink: (provider: RouterLinkProviderService) => RouterLink
  ): this {
    return this.type(MenuItemType.RouterLink).routerLink(
      routerLink(this.routerLinkProvider)
    );
  }

  initMore(children: (builder: MenuItemBuilderService) => MenuItem[]): this {
    return this.type(MenuItemType.More).children(builder => children(builder));
  }

  initLink(link: string): this {
    return this.type(MenuItemType.Link).link(link);
  }

  initCommand(command: MenuItemCommand): this {
    return this.type(MenuItemType.Command).command(command);
  }

  label(label: string): this {
    this._label = label;

    return this;
  }

  type(type: MenuItemType): this {
    this._type = type;

    return this;
  }

  routerLink(routerLink: RouterLink): this {
    this._routerLink = routerLink;

    return this;
  }

  link(link: string): this {
    this._link = link;

    return this;
  }

  icon(icon: Icon): this {
    this._icon = icon;

    return this;
  }

  children(factory: (builder: MenuItemBuilderService) => MenuItem[]): this {
    this._children = factory(this.newInstance());

    return this;
  }

  visibility(visibility$: Observable<boolean>): this {
    this._visibility$ = visibility$;

    return this;
  }

  command(command: MenuItemCommand): this {
    this._command = command;

    return this;
  }

  build(): MenuItem {
    this.requireLabel();
    this.requireType();
    this.configureDefaultVisibility();

    if (this.isRouterLink()) {
      this.requireRouterLink();
    }

    if (this.isLink()) {
      this.requireLink();
    }

    const item = new MenuItem(
      this._label!,
      this._type!,
      this._visibility$!,
      this._icon,
      this._routerLink,
      this._link,
      this._children,
      this._command
    );

    this.reset();

    return item;
  }

  private requireLabel(): void {
    if (isNil(this._label)) {
      throw new RequireMethodCallException(this.label.name);
    }
  }

  private requireType(): void {
    if (isNil(this._type)) {
      throw new RequireMethodCallException(this.type.name);
    }
  }

  private requireRouterLink(): void {
    if (isNil(this._routerLink)) {
      throw new RequireMethodCallException(this.routerLink.name);
    }
  }

  private requireLink(): void {
    if (isNil(this._link)) {
      throw new RequireMethodCallException(this.link.name);
    }
  }

  private isRouterLink(): boolean {
    return this._type === MenuItemType.RouterLink;
  }

  private isLink(): boolean {
    return this._type === MenuItemType.Link;
  }

  private isCommand(): boolean {
    return this._type === MenuItemType.Command;
  }

  private isMore(): boolean {
    return this._type === MenuItemType.More;
  }

  private configureDefaultVisibility(): void {
    if (!isNil(this._visibility$)) {
      return;
    }

    this.visibility(of(true));
  }
}
