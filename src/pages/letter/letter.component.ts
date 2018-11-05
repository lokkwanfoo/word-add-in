import { Component, OnInit } from '@angular/core';

import { DataService } from '../../app/services/data.service';

import { base64 } from '../../../base64';

@Component({
  moduleId: module.id,
  selector: 'app-letter',
  templateUrl: '../letter/letter.component.html',
})

export class LetterComponent {

  constructor(private dataService: DataService) { 
    
  }

  loadTemplate() {
    console.log((this.dataService.getTemplate('letter')));
    Word.run(function (context) {

      context.document.body.clear();
      
      // Queue a commmand to insert base64 encoded .docx at the beginning of the content body.
      // You will need to implement getBase64() to pass in a string of a base64 encoded docx file.
      context.document.body.insertFileFromBase64(base64, "Start");

      // Synchronize the document state by executing the queued commands,
      // and return a promise to indicate task completion.
      return context.sync().then(function () {
          console.log('Added base64 encoded text to the beginning of the document body.');
      });

      })
      .catch(function (error) {
          console.log("Error: " + error);
          if (error instanceof OfficeExtension.Error) {
              console.log("Debug info: " + JSON.stringify(error.debugInfo));
          }
      });
  }

}
