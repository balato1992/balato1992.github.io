import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  displayLanguage: string = 'tw';

  languageList = [
    { code: 'en', name: 'English' },
    { code: 'tw', name: 'Traditional-Chinese' },
    { code: 'jp', name: 'Japan' }
  ];

  get i18nLang(): string {
    const mapping: { [key: string]: string } = {
      en: 'US',
      tw: 'ZH',
      jp: 'JP'
    }
    return mapping[this.displayLanguage];
  }

  constructor() { }

  ngOnInit() {
    this.displayLanguage = this.getCurrentLanguage();
  }

  onSelectionChange($event: string) {
    this.redirectTo($event);
  }

  private redirectTo(redirectLang: string) {
    const redirectPathName = window.location.pathname.replace(`/${this.displayLanguage}/`, `/${redirectLang}/`);
    console.log(redirectPathName);
    //window.location.pathname = redirectPathName;
  }

  private getCurrentLanguage = () => {
    const lang = ['en', 'tw', 'jp'];
    const currentLang = lang.find(l => new RegExp(`/${l}/`).test(window.location.pathname));
    if (!currentLang) {
      return 'en';
    }
    return currentLang;
  };

}
