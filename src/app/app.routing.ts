import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AppComponent from './app.component';
import { LetterComponent } from '../letter/letter.component';

// const routes: Routes = [
//     {
//         path: '',
//         component: AppComponent
//     },
//     { 
//         path: 'users', 
//         component: UsersComponent 
//     }
//   ];

  @NgModule({
    imports: [ RouterModule.forRoot([
        {
            path: '',
            component: AppComponent
        },
        {
          path: 'letter',
          component: LetterComponent
      }
      ]) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}