import { GetStaticPaths, NextPage, GetStaticProps } from "next";

import { Layout } from "../../components/layouts";

import { pokeApi } from "../../services";
import { Pokemon } from "../../interfaces";
import { useFavouriteHook } from "../../hooks";
import { PokemonDetail } from "../../components/pokemon/PokemonDetail";
import { getPokemonInfo } from "../../utils";
interface Props {
  pokemon: Pokemon;
}

const PokemonByIdPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={`id - Detalles de ${pokemon.name}`}>
      <PokemonDetail pokemon={pokemon} />
    </Layout>
  );
  1;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons = [...Array(151)].map((_, i) => ({
    params: {
      id: String(i + 1),
    },
  }));

  return {
    paths: pokemons,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return { props: { pokemon: await getPokemonInfo(id) }, revalidate: 86400 };
};

export default PokemonByIdPage;
