import { Component } from '@angular/core';
import { ClimateService } from './climate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:string;
  current;
  
}
