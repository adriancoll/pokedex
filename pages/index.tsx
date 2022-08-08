import { FC } from "react";

import type { NextPage } from "next";

import { Layout } from "../components/layouts";

type Props = {
  data: {
    results: {
      name: string;
      url: string;
    }[];
  };
};

const HomePage: NextPage<Props> = ({ data }) => {
  return (
    <Layout title="Listado de Pokemons">
      <ul>
        {data.results.map(({ name }, index) => (
          <li key={index}>
            <p>{name}</p>
          </li>
        ))}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </ul>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await (await fetch("https://pokeapi.co/api/v2/pokemon")).json(); // your fetch function here

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
