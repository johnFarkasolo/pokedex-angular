import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';
import {Router} from '@angular/router';
import {PokemonDetail} from '../models/pokemon.detail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemons: PokemonDetail[] = [];

  constructor(private dataService: PokemonService, private router: Router) { }

  ngOnInit(): void {
  }


}
