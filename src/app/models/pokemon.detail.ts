export class PokemonDetail {
  id: number;
  name: string;
  types: Type[];
  url: string;
  stats: Stat[];

  constructor() {
    this.types = [];
  }
}

class Type {
  slot: number;
  type: {
    name: string;
  };
}

class Stat {
  base_stat: number;
  stat: {
    name: string
  };
}

