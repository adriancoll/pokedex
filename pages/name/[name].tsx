import { GetStaticPaths, NextPage, GetStaticProps } from "next";

import { Layout } from "../../components/layouts";

import { pokeApi } from "../../services";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { PokemonDetail } from "../../components/pokemon/PokemonDetail";
import { getPokemonInfo, pokemons } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={`Detalles de ${pokemon.name} - name`}>
      <PokemonDetail pokemon={pokemon} />
    </Layout>
  );
};

// static paths
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  console.log(data);

  const pokemons = data.results.map(({ name }) => ({
    params: { name },
  }));

  return {
    paths: pokemons,
    fallback: false,
  };
};

//static props
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  return { props: { pokemon: await getPokemonInfo(name) } };
};

export default PokemonByNamePage;
