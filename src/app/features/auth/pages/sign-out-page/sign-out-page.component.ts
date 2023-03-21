import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorService } from '@core/routing/services/navigator.service';
import { Route } from '@core/routing/enums/route';

@Component({
  selector: 'app-sign-out-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignOutPageComponent implements OnInit {
  constructor(private readonly navigator: NavigatorService) {}

  ngOnInit(): void {
    this.navigateToSignInPage();
  }

  private navigateToSignInPage(): void {
    this.navigator.navigateByRouterLink(provider =>
      provider.routerLink(Route.SignIn)
    );
  }
}
