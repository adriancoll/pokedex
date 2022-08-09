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
    <Grid xs={6} sm={4} md={4} xl={3} onClick={handleClick}>
      <Card isHoverable isPressable>
        <Card.Image
          src={pokemon.img}
          objectFit="cover"
          width="100%"
          height={340}
          loading="lazy"
          alt="Card image background"
        />
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
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
                    size={26}
                  >
                    {pokemon.name}
                  </Text>
                </Col>
                <Col
                  css={{
                    textAlign: "right",
                  }}
                >
                  <Text color="#d1d1d1" size={32}>
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
