import Head from "next/head";
import React from "react";

function Header({ ...props }) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/glenicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jeremywijanto.com/" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content="/glenicon.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jeremywijanto.com/" />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content="/glenicon.png" />
    </Head>
  );
}

export default Header;
