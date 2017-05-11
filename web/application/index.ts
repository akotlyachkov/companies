import '../styles/styles.scss'
import './styles/index.scss'

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js'
//Error['stackTraceLimit'] = Infinity;
//import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata'
import 'rxjs';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';


import {AppModule } from 'module';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);