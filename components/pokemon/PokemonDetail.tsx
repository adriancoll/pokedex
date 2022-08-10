import { NextPage } from "next";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { useFavouriteHook } from "../../hooks";

interface Props {
  pokemon: Pokemon;
}

export const PokemonDetail: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorite, buttonRef] = useFavouriteHook(pokemon.id);

  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ padding: "30px" }}>
          <Card.Body>
            <Card.Image
              width="100%"
              height="200px"
              loading="lazy"
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                "/no-image.png"
              }
            />
          </Card.Body>
        </Card>
      </Grid>

      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text h1 transform="capitalize">
              {pokemon.name}{" "}
            </Text>
            <Button
              color="gradient"
              ghost={!isInFavorite}
              ref={buttonRef as any}
            >
              {isInFavorite ? "En favoritos" : "Guardar en favoritos"}
            </Button>
          </Card.Header>

          <Card.Body>
            <Text size={30}>Sprites:</Text>

            <Container direction="row" display="flex">
              <Image
                showSkeleton
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width="100"
                height="100"
              />{" "}
              <Image
                showSkeleton
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width="100"
                height="100"
              />{" "}
              <Image
                showSkeleton
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width="100"
                height="100"
              />{" "}
              <Image
                showSkeleton
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width="100"
                height="100"
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
