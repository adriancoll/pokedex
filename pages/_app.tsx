import "../styles/globals.css";
import type { AppProps } from "next/app";
import { darkTheme } from "../themes";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
