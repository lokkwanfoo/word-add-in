import { Component } from '@angular/core';


const template = require('../app/app.component.html');

@Component({
    selector: 'app-home',
    template
})

export default class AppComponent {
    welcomeMessage = 'doOffice';

    createContentControl() {
        Word.run(function (context) {
    
            const serviceNameRange = context.document.getSelection();
            const serviceNameContentControl = serviceNameRange.insertContentControl();
            serviceNameContentControl.title = "Service Name";
            serviceNameContentControl.tag = "serviceName";
            serviceNameContentControl.appearance = "Tags";
            serviceNameContentControl.color = "blue";
                
            return context.sync();
        })
        .catch(function (error) {
            console.log("Error: " + error);
            if (error instanceof OfficeExtension.Error) {
                console.log("Debug info: " + JSON.stringify(error.debugInfo));
            }
        });
    }

    async run() {
        return Word.run(async context => {
            /**
             * Insert your Word code here
             */
            const range = context.document.getSelection();
            
            // Read the range text
            range.load('text');

            // Update font color
            range.font.color = 'red';

            await context.sync();
            console.log(`The selected text was ${range.text}.`);
        });
    }
}