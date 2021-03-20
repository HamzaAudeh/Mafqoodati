import { Component } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  dir: string = "ltr";
  @Language() lang: string;

  constructor(public locale: LocaleService,
    public translation: TranslationService) { }


  ngOnInit(): void {
    this.dir = this.locale.getCurrentLocale() == "ar" ? "rtl" : "ltr";

    let body = document.getElementsByTagName('body')[0];
    if (this.dir == "ltr") {
      body.classList.remove("Arabic");
    }
    else {
      body.classList.add("Arabic");
    }
  }

  selectLanguage(language: string): void {
    this.locale.setCurrentLanguage(language);
    this.dir = language == "ar" ? "rtl" : "ltr";
  }
}
