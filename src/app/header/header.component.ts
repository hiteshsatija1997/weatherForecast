import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClimateService } from '../climate.service';
import { CurrentdataService } from '../currentdata.service';
// import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() childEvent = new EventEmitter();
  @Output() currentEvent =new EventEmitter();
  constructor(private climateservice: ClimateService, private currentdataservice: CurrentdataService) { }



  search(name: string) {
    this.climateservice.getData(name).subscribe(data => {
      this.childEvent.emit(data.list);
    });
    this.currentdataservice.getCurrentData(name).subscribe(data=>{
      
      this.currentEvent.emit({
        date:data.dt,
        city:data.name,
        temp:data.main.temp/10,
        pressure:data.main.pressure,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        icon:data.weather[0].icon,
        wind:data.wind.speed
      });
    })

  }

}
