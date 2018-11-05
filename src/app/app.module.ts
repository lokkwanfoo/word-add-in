import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule }           from '@angular/router';

import AppComponent             from './app.component';
import { AppRoutingModule }     from './app.routing';

import { LetterComponent }      from '../letter/letter.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent,
    LetterComponent
  ]
})
export default class AppModule { }