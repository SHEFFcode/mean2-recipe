import { Component } from '@angular/core';
import {HeaderComponent} from "./header.component";

@Component({
  moduleId: module.id,
  selector: 'js-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent]
})
export class AppComponent {

}
