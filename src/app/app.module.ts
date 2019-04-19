import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { ClimateService } from './climate.service';
import { HttpClientModule } from '@angular/common/http'
// import {CommonModule}from '@angular/common'
import { from } from 'rxjs';
import { CurrentComponent } from './current/current.component';
import { CurrentdataService } from './currentdata.service'

@NgModule({
  declarations: [
    AppComponent,
    // CommonModule,
    HeaderComponent,
    DataComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClimateService, CurrentdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
