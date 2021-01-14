import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
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
  pokemons: PokemonList[] = [];
  isLoading = false;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;

    return this.dataService.getPokemons(this.pokemons.length, 20)
      .subscribe(res => {
        // @ts-ignore
        const pokemon = res.map(p => {
           p.imageLoaded = true;
           return p;
         });
        this.pokemons = this.pokemons.concat(pokemon);
        console.log(this.pokemons);
        this.isLoading = false;
    });
  }

}
