import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cakes } from './models/cakes.model';
import { Opinion } from './models/opinion.model';
import { Cake } from './models/cake.model';
import { CakeJson } from './models/cakeJson.model';
@Injectable({
  providedIn: 'root',
})
export class CakeService {
  constructor(private http: HttpClient) {}
  getCakes(): Observable<Cakes> {
    return this.http.get<Cakes>('/cakes');
  }
  getCake(id: string): Observable<CakeJson> {
    return this.http.get<CakeJson>(`/cakes/${id}`);
  }
  createCake(newCake: Cake): Observable<Cakes> {
    return this.http.post<Cakes>('/cakes', newCake);
  }
  createOpinion(newOpinion: Opinion, id: string): Observable<Opinion> {
    return this.http.put<Opinion>(`/cakes/${id}`, newOpinion);
  }
}
