import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule }           from '@angular/router';
import { HttpClientModule }       from '@angular/common/http';

import AppComponent             from './app.component';
import { AppRoutingModule }     from './app.routing';

import { LetterComponent }      from '../pages/letter/letter.component';
import { OptionsComponent }     from '../pages/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  bootstrap: [
    AppComponent,
    LetterComponent,
    OptionsComponent
  ]
})
export default class AppModule { }