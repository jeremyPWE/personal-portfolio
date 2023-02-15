import Head from "next/head";
import React from "react";

function Header({ ...props }) {
  return (
    <Head>
      <title>Jeremy Wijanto</title>
      <meta
        name="description"
        content="Jeremy is a Frontend Developer specializing in exceptional and accessible digital experiences."
      />
      <link rel="icon" href="/jw-icon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jeremywijanto.com/" />
      <meta property="og:title" content="Jeremy Wijanto" />
      <meta
        property="og:description"
        content="Jeremy is a Frontend Developer specializing in exceptional and accessible digital experiences."
      />
      <meta property="og:image" content="/jw-icon.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jeremywijanto.com/" />
      <meta property="twitter:title" content="Jeremy Wijanto" />
      <meta
        property="twitter:description"
        content="Jeremy is a Frontend Developer specializing in exceptional and accessible digital experiences."
      />
      <meta property="twitter:image" content="jw-icon.png" />
    </Head>
  );
}

export default Header;
