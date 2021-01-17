import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';
import {PokemonDetail} from '../shared/models/pokemon.detail';
import {PokemonList} from '../shared/models/pokemon.list';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss']
})
export class PokemonMainComponent implements OnInit {
  public pokemons: any;
  public pokemon: any = [];
  public sub: any;
  public query: string;
  public offset = 0;
  public limit = 100;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void{
    this.getPokemons();
  }

  onSubmit() {
    this.offset += 100;
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((data: PokemonList[]) => {
        this.pokemons = data;
        Object.keys(this.pokemons.results).map(key => {
          this.displayPokemon(this.pokemons.results[key].name);
        });
      });
  }

  displayPokemon(id: any) {
    this.pokemonService
      .getPokemonDetail(id)
      .subscribe((data: PokemonDetail) => {
        const pokemonData = {
          id: data.id,
          name: data.name,
          sprite: data.sprites.front_default,
          types: data['types'],
          isFavorite: false
        };
        this.pokemon.push(pokemonData);
        this.pokemon.sort((array, order) => array.id - order.id);
      });
  }

}
