import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';
import {PokemonDetail} from '../shared/models/pokemon.detail';
import {PokemonList} from '../shared/models/pokemon.list';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  public pokemons: PokemonList[];
  public pokemon: PokemonDetail;
  public sub: any;

  constructor(
    private pokemonService: PokemonService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPokemonId();
  }

  getPokemonId() {
    this.sub = this.router.params.subscribe(params => {
      this.pokemonService
        .getPokemonDetail(params.id)
        .subscribe((data: PokemonDetail) => {
          this.pokemon = {...data, sprites: data.sprites.front_default = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`};
        });
    });
  }

  displayPokemon(id) {
    this.pokemonService
      .getPokemonDetail(id)
      .subscribe((data: PokemonDetail) => {
        console.log(data);
      });
  }

}
