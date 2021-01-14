import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {PokemonDetail} from '../models/pokemon.detail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemons: PokemonDetail[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.loadPokemon()
  }

  loadPokemon() {

  }


}
