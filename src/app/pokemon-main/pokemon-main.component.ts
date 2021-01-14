import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';
import {Router} from '@angular/router';
import {PokemonDetail} from '../models/pokemon.detail';
import {FormControl} from '@angular/forms';
import {PokemonList} from '../models/pokemon.list';
import {Observable} from 'rxjs';

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
  public limit = 20;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void{
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
          stats: data['stats'],
          species: data['species'].url,
        };

        this.pokemon.push(pokemonData);
        this.pokemon.sort((array, order) => array.id - order.id);
      });
  }

}
