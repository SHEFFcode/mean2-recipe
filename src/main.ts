import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {ShoppingListService} from "./app/shopping-list/shopping-list.service";
import {APP_ROUTES_PROVIDERS} from "./app/app.routes";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http"; // add this import

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ShoppingListService,
  APP_ROUTES_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
]);
