import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavouritePokemonCard } from "./FavouritePokemonCard";
import { NoFavourites } from "./NoFavourites";

interface Props {
  pokemons: number[];
}

export const FavouritePokemons: FC<Props> = ({ pokemons }) => {
  if (pokemons.length === 0) {
    return <NoFavourites />;
  }

  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavouritePokemonCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
