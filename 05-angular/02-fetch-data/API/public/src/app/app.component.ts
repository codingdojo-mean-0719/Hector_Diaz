import { Component, OnInit } from '@angular/core';
import { HectorsFavPokemService } from './hectors-fav-pokem.service';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'public';
  pokemon: Pokemon;
  constructor(private favPokemon: HectorsFavPokemService) {
    this.getPokemon();
  }
  getPokemon(): void {
    this.favPokemon.getPokemon().subscribe(pokemon => {
      console.log('Alakzam, I choose you!', pokemon);
      console.log('Alakzam uses a ', pokemon.held_items[0].item.name);
      this.favPokemon
        .getPokemonAbility(pokemon.abilities[1].ability.url)
        .subscribe(abilities => {
          console.log('this is ability', abilities);
        });
      this.pokemon = pokemon;
    });
  }
  ngOnInit(): void {
    console.log('this is being triggerd on page load');
  }
}
