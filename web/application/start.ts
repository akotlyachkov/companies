
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';


import {AppModule } from './appModule';
import {SharedService} from "./providers/global";
enableProdMode();
var promise = platformBrowserDynamic().bootstrapModule(AppModule, [SharedService]);