import { Component, OnInit, Input } from '@angular/core';
import { WeatherRouterModule } from '../app-routing.module';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.interface';
import { ActivatedRoute } from '@angular/router';
import { Params } from '../params.interface';
import { images } from '../cities.images';
@Component({
  selector: 'app-display-city',
  templateUrl: './display-city.component.html',
  styleUrls: ['./display-city.component.css'],
})
export class DisplayCityComponent implements OnInit {
  weather = new Weather();
  image;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly weatherService: WeatherService
  ) {}
  ngOnInit() {
    this.checkParam();
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe(weather => {
      this.weather = weather;
      console.log('here is the weather', weather, this.weather);
    });
  }
  // determine where ot go based off router params
  checkParam(): void {
    this.route.paramMap.subscribe(param => {
      // check to see if param is either an empty string or a city name as a string
      if (param.get('city')) {
        // get the weather for the city selected to display it
        this.image = images[param.get('city')];
        this.getWeather(param.get('city'));
      } else {
        // display defualt city
        console.log('here is the images', images);
        this.image = images.Boise;
        this.getWeather('Boise');
      }
    });
  }
}
