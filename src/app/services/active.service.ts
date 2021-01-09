import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  activeTab: string;

  constructor() { }

  setTab(input: string) {
    this.activeTab = input;
  }

  getTab(): string {
    return this.activeTab;
  }
}
