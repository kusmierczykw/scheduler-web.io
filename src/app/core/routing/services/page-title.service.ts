import { Injectable } from '@angular/core';
import { Title as AppTitle } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private readonly titleSource$ = new BehaviorSubject(this.appTitle.getTitle());

  constructor(private readonly appTitle: AppTitle) {}

  title(): Observable<string> {
    return this.titleSource$.asObservable();
  }

  setTitle(title: string): void {
    this.appTitle.setTitle(title);
    this.titleSource$.next(title);
  }
}
