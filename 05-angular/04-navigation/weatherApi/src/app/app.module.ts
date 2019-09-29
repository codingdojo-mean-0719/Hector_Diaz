import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRouterModule } from './app-routing.module';
import { DisplayCityComponent } from './display-city/display-city.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, DisplayCityComponent, NavComponent],
  imports: [BrowserModule, HttpClientModule, WeatherRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}