import { Component } from '@angular/core';


const template = require('./app.component.html');

@Component({
    selector: 'app-home',
    template
})
export default class AppComponent {
    welcomeMessage = 'Welcome';

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