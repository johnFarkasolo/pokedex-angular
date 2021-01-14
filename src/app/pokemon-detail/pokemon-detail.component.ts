import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemons = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonInfo;
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.map((result) => {
        this.dataService.getMoreData(result.name)
          .subscribe((uniqRes: any) => {
            pokemonInfo = {
              id: uniqRes.id,
              name: uniqRes.name,
              types: uniqRes.types,
              url: `https://pokeres.bastionbot.org/images/pokemon/${uniqRes.id}.png`,
              stats: uniqRes.stats,
            };
            console.log(pokemonInfo);
            this.pokemons.push(pokemonInfo);
          });
      });
    });
  }

}
