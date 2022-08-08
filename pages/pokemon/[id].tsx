import { GetStaticPaths, NextPage, GetStaticProps } from "next";

import { Layout } from "../../components/layouts";

import { pokeApi } from "../../services";
import { Pokemon } from "../../interfaces";
interface Props {
  pokemon: Pokemon;
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Algun pokemon">
      <h1>
        {pokemon.id} - {pokemon.name}
      </h1>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons = [...Array(151)].map((_, i) => ({
    params: {
      id: String(i + 1)
    }
  }))

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

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonDetail;
