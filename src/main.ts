import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {ShoppingListService} from "./app/shopping-list/shopping-list.service";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ShoppingListService]);
