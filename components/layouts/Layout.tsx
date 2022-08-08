import { FC } from "react";

import Head from "next/head";

import { Navbar } from "../ui";

type Props = { children: JSX.Element; title: string };

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"} </title>
        <meta name="author" content="Adrián Coll Suárez" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
