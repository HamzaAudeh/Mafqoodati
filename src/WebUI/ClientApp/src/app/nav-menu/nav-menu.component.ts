import { Component } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';
import { BaseComponent } from '../../shared/components/base-component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent extends BaseComponent {
  isExpanded = false;

  constructor() {
    super();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  selectLanguage(language: string): void {
    this.localeService.setCurrentLanguage(language);
    window.location.reload();
  }
}
