import "../styles/globals.scss";

import React from "react";

import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Adam Pithenwala</title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Adam, adam, Adam Pithenwala, adam pithenwala, Adam pithenwala"
        />
        <meta name="Description" content="About Adam Pithenwala" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
