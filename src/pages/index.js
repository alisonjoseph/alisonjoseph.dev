import { useState, useEffect } from "react";
import { Button, Grid, Column, PasswordInput, Stack } from "@carbon/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../scss/Home.module.scss";

import Header from "../components/Header";
import Contact from "../components/Contact";
import About from "../components/About";
import Work from "../components/Work";
import BackToTopBtn from "../components/BackToTopBtn";

export default function Home() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const correctPassword = "pink";
  const STORAGE_KEY = "site-auth";

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(STORAGE_KEY) === "1") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const ok = password.trim().toLowerCase() === correctPassword;
    if (ok) {
      localStorage.setItem(STORAGE_KEY, "1");
      setIsAuthenticated(true);
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
    setPassword("");
    setIsInvalid(false);
  };

  return (
    <>
      <Head>
        <title>Alison Joseph</title>
        <meta
          name="description"
          content="Level 10 gymnast at Capital Gymnastics."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Alison Joseph" />
        <meta
          property="og:description"
          content="Level 10 gymnast at Capital Gymnastics."
        />
        <meta property="og:url" content="https://rowynjoseph.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://rowynjoseph.com/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {!isAuthenticated ? (
        <div className={styles.passwordContainer}>
          <form onSubmit={handleSubmit} className={styles.passwordForm}>
            <Stack gap={7}>
              <PasswordInput
                labelText="Enter password"
                defaultWidth={300}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                invalid={isInvalid}
                invalidText="Incorrect password. Please try again."
                size="md"
              />
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </div>
      ) : (
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
                {/* <Button kind="ghost" size="sm" onClick={handleLogout}>
                  Log out
                </Button> */}
              </Column>
            </Grid>
          </footer>

          <BackToTopBtn />
        </div>
      )}
    </>
  );
}
