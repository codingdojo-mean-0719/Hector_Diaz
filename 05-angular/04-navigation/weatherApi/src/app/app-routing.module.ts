import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayCityComponent } from './display-city/display-city.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayCityComponent,
  },
  {
    path: ':city',
    component: DisplayCityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WeatherRouterModule {}
