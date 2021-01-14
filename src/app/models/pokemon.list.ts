export class PokemonList {
  id: number;
  name: string;
  url: string;
  types: Type[];

  constructor() {
    this.name = '';
    this.url = null;
    this.types = [];
  }
}

class Type {
  slot: number;
  type: {
    name: string
  };
}
