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

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
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

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  return { props: { pokemon: await getPokemonInfo(id) } };
};

export default PokemonByIdPage;
