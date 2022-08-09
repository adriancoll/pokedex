import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { PokemonCard } from "../../components/pokemon";
import { FavouritePokemons, NoFavourites } from "../../components/ui";
import { pokemons } from "../../utils";

const FavouritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <Layout title="FAVOURITES PAGE">
      <FavouritePokemons pokemons={favoritePokemons} />
    </Layout>
  );
};

export default FavouritesPage;
