import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  id: number;
}

export const FavouritePokemonCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  }

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={handleClick}>
      <Card
        isHoverable
        isPressable
        css={{
          padding: 10,
        }}
      >
        <Card.Image
          width={"100%"}
          showSkeleton
          height={140}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
      </Card>
    </Grid>
  );
};
