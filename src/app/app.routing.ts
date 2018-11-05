import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AppComponent from './app.component';
import { LetterComponent } from '../pages/letter/letter.component';
import { OptionsComponent } from '../pages/options/options.component';

  @NgModule({
    imports: [ RouterModule.forRoot([
        {
            path: '',
            component: AppComponent
        },
        {
            path: 'options',
            component: OptionsComponent
        },
        {
          path: 'letter',
          component: LetterComponent
        }
      ]) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}