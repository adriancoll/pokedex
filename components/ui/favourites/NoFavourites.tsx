import { Container, Image, Text } from "@nextui-org/react";

export const NoFavourites = () => (
  <Container
    css={{
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 100px)",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    }}
  >
    <Text h1 className="hero glitch layers" data-text="NO TIENES POKEMONS">
      <Text span>NO TIENES POKEMONS</Text>
      <Image
        width={250}
        height={250}
        alt="pokemon favorito"
        css={{
          opacity: 0.05,
        }}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg"
      />
    </Text>
  </Container>
);
