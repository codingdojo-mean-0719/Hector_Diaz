import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = 'fd93e8539698035f0ad9a205f93167ee';
  constructor(private http: HttpClient) {}
  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=${
        this.apiKey
      }`
    );
  }
}
