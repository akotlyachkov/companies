
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';


import {AppModule } from './appModule';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);