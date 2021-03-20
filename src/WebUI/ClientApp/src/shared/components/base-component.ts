import { Component, Injectable, OnDestroy, OnInit } from "@angular/core";
import { LocaleService, TranslationService } from "angular-l10n";
import { InjectorService } from "../core/services/injector";

@Injectable()
export class BaseComponent implements OnInit, OnDestroy {
    translationService: TranslationService;
    localeService: LocaleService;
    translationSubscription;
    direction: string;
    currentLanguage: string;
    errorMessage: string = "";
    error;

    constructor() {
        this.translationService = InjectorService.injector.get(TranslationService);
        this.localeService = InjectorService.injector.get(LocaleService);;
    }

    ngOnInit(): void {
        this.translationSubscription = this.translationService.translationChanged().subscribe(
            (language) => {
                this.onTranslationChanged();
            }
        );
    }

    ngOnDestroy(): void {
        if (this.translationSubscription) {
            this.translationSubscription.unsubscribe();
        }
    }

    onTranslationChanged() {
        this.currentLanguage = this.checkLanguage();
        this.direction = this.currentLanguage === 'ar' ? 'rtl' : 'ltr'
    }

    translate(key: string): string {
        return this.translationService.translate(key);
    }

    checkLanguage(): string {
        const languageCode = this.localeService.getCurrentLanguage();
        return languageCode;
    }
}