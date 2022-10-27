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
        <meta name="title" content="Adam" />
        <meta name="description" content="Hello Myself Adam Pithenwala, and this is my Portfolio Website. I am Currently student at Madhav Institute of Technology and Science." />
        <meta name="keywords" content="Adam, Adam Pithenwala, adam, adam pithenwala, Pithenwala, Adam portfolio, adam website, Adam website" />
        <meta name="robots" content="index, follow" />
        <meta content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Adam Pithenwala" />
        <meta property="og:image" content="/images/Adam_pithenwala.png"/>
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
