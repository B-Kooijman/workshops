export type ViewState = 'SUCCESS' | 'LOADING' | 'ERROR';

export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonTypeItem = {
    pokemon: {
      name: string;
    };
  };

export type Pokemon = {
  id: number;
  species: {
    name: string;
  };
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: [
    {
      type: PokemonType;
    },
  ];
};

export type PokemonListItem = {
  name: string;
};

export type PokemonList = {
  results: PokemonListItem[];
};
