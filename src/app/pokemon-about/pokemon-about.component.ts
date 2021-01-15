import {Component, Input} from '@angular/core';
import {PokemonDetail} from '../shared/models/pokemon.detail';

@Component({
  selector: 'app-pokemon-about',
  templateUrl: './pokemon-about.component.html',
  styleUrls: ['./pokemon-about.component.scss']
})
export class PokemonAboutComponent {

  @Input('pokemon') pokemon: PokemonDetail;

}
