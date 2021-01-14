import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PokemonMainComponent} from './pokemon-main/pokemon-main.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './shared/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonMainComponent,
    PokemonDetailComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
