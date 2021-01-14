import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonMainComponent} from './pokemon-main/pokemon-main.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: '', component: PokemonMainComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
