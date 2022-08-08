import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const darkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {},
    space: {},
    fonts: {},
  },
});
