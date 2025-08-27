import { Button, Grid, Column } from "@carbon/react";

import Head from "next/head";
import Image from "next/image";
import styles from "../scss/Home.module.scss";

import Header from "../components/Header";
import Contact from "../components/Contact";
import About from "../components/About";
import Work from "../components/Work";
import BackToTopBtn from "../components/BackToTopBtn";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alison Joseph</title>
        <meta
          name="description"
          content="Hi, I'm Alison. I'm an engineering manager and development
          lead on IBM's Carbon Design System. I love working in the space where
          design meets code, leading teams that build and maintain our
          component library and partnering with leaders across the business to
          scale design system adoption."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Alison Joseph" />
        <meta
          property="og:description"
          content="Hi, I'm Alison. I'm an engineering manager and development
          lead on IBM's Carbon Design System. I love working in the space where
          design meets code, leading teams that build and maintain our
          component library and partnering with leaders across the business to
          scale design system adoption."
        />
        <meta property="og:url" content="https://alisonjoseph.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://alisonjoseph.dev/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.container}>
        <main>
          <Header />
          <Grid>
            <Column sm={4} md={8} lg={16}>
              <About />
            </Column>
            <Column sm={4} md={8} lg={16}>
              <Work />
            </Column>
            <Column sm={4} md={8} lg={16}>
              <Contact />
            </Column>
          </Grid>
        </main>

        <footer className={styles.footer}>
          <Grid>
            <Column sm={4} md={8} lg={16}>
              <p>Copyright © {new Date().getFullYear()} Alison Joseph</p>
            </Column>
          </Grid>
        </footer>

        <BackToTopBtn />
      </div>
    </>
  );
}
