import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonDetail} from './models/pokemon.detail';
import {PokemonList} from './models/pokemon.list';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {
  }

  getPokemons(offset: number, limit: number): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${this.baseUrl}pokemon?offset=${offset}&limit=${limit}'`)
      .pipe(
        map((x: any) => x.results),
        map(pokemons => {
          return pokemons.map((poke, index) => {
            const id: number = index + offset + 1;

            return {
              name: poke.name,
              sprite: this.getPokemonSprites(id),
              id
            };
          });
        })
      );
  }

  getPokemonSprites(id) {
    return `${this.baseSpriteUrl}${id}.png`;
  }

  findPokemon(search) {
    return this.http.get(`${this.baseUrl}pokemon/${search}`).pipe(
      map((pokemon: any) => {
        console.log(pokemon);
        pokemon.sprite = this.getPokemonSprites(pokemon.id);
        pokemon.id = pokemon.id;
        return pokemon;
      }));
  }

}


