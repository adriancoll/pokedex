import Image from "next/image";
import NextLink from "next/link";

import { Spacer, Text, useTheme } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export const Navbar = () => {
  const { theme, isDark } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        alt="icono de la app"
        width="70px"
        height="70px"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
      />

      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favourites" passHref>
        <Link block color="secondary" animated="true">
          Favoritos
        </Link>
      </NextLink>
    </div>
  );
};
