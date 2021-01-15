import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {PokemonDetail} from '../shared/models/pokemon.detail';
import {PokemonList} from '../shared/models/pokemon.list';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  public pokemons: PokemonList[] = [];
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
          this.pokemon = data;
        });
    });
  }

  displayPokemon(id) {
    this.pokemonService
      .getPokemonDetail(id)
      .subscribe((data: PokemonDetail) => {
        this.pokemon = data;
      });
  }

  submitPokemon(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = form.get('id');
    this.displayPokemon(id);
  }

}
