import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HectorsFavPokemService {
  constructor(private http: HttpClient) {}
  getPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/65/');
  }
  getPokemonAbility(abilityAPi): Observable<Pokemon> {
    return this.http.get<Pokemon>(abilityAPi);
  }
}
