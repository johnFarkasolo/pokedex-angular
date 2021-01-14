import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
import {PokemonDetail} from '../models/pokemon.detail';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss']
})
export class PokemonMainComponent implements OnInit {
  pokemons: PokemonDetail[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.map((result) => {
        this.dataService.getMoreData(result.name)
          .subscribe((uniqRes: any) => {
            pokemonData = {
              id: uniqRes.id,
              name: uniqRes.name,
              url: `https://pokeres.bastionbot.org/images/pokemon/${uniqRes.id}.png`,
              types: uniqRes.types
            };
            this.pokemons.push(pokemonData);
          });
      });
    });
  }


}
