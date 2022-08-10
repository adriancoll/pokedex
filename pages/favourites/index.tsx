import { useEffect, useState } from "react";

import { NextPage } from "next";

import { Layout } from "../../components/layouts";
import { FavouritePokemons } from "../../components/pokemon";
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
