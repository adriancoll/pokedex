import { Pokemon } from "../interfaces";
import { pokeApi } from "../services";

export const getPokemonInfo = async (nameOrId: string) => {

  try {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    return {
      id: data.id,
      sprites: data.sprites,
      name: data.name,
    };

  } catch (error) {
    return null
  }

};
