export class PokemonDetail {
  id: number;
  name: string;
  sprites: Sprites;
  types: Types;
  stats: Stats;
  isFavorite: boolean;
}

export interface Sprites {
  front_default: string;
}
export interface Types {
  types: [];
}
export interface Stats {
  stats: [];
  base_stat: number;
}
