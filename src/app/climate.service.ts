import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClimateService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getData(loc) {

    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/forecast?q=${loc}&APPID=e0caf7c586cf513bbd22257a01fa3358`)
  }

}
