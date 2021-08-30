import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  sourcePath =
    'https://firebasestorage.googleapis.com/v0/b/testapp-bb252.appspot.com/o/TACtivities%2FBA05%2FDIY%20Stethoscope.pdf?alt=media&token=c91cc594-052b-4c5c-a050-f1a94798b1b1';
  fileName = 'sample.pdf';
}
