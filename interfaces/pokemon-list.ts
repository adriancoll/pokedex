export interface PokemonListResponse {
  count     : number;
  next?     : string;
  previous? : null;
  results   : SmallPokemon[];
}

export interface SmallPokemon {
  id        : number;
  name      : string;
  url       : string;
  img       : string;
}
