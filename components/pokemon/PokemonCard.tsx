import { FC } from "react";

import { SmallPokemon } from "../../interfaces";

import { Card, Col, Grid, Text, Row, Button } from "@nextui-org/react";
import Router from "next/router";

type Props = {
  pokemon: SmallPokemon;
};

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    Router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1.5} key={pokemon.id} onClick={handleClick}>
      <Card isHoverable isPressable variant="shadow" color="$red600">
        <Card.Body>
          <Card.Image
            src={pokemon.img}
            objectFit="contain"
            showSkeleton
            width="100%"
            height={140}
            loading="lazy"
            alt="Card image background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <Row>
            <Col>
              <Row align="center" justify="space-between">
                <Col>
                  <Text
                    transform="capitalize"
                    weight="semibold"
                    color="#d1d1d1"
                    size={14}
                  >
                    {pokemon.name}
                  </Text>
                </Col>
                <Col
                  css={{
                    textAlign: "right",
                  }}
                >
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    # {pokemon.id}
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
