import React, { useEffect, useRef, useState } from "react";
import {
  Header as CarbonHeader,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
  Grid,
  Column,
} from "@carbon/react";
import ThemeSwitcher from "../ThemeSwitcher";
import styles from "./Header.module.scss";

const Header = () => {
  const [showNameInNav, setShowNameInNav] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the hero section is NOT intersecting (out of view), show name in nav
        setShowNameInNav(!entry.isIntersecting);
      },
      {
        // Trigger when the hero section is 10% visible
        threshold: 0.1,
        // Add some margin to trigger the effect a bit before/after
        rootMargin: "-50px 0px 0px 0px",
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div aria-label="header" className={styles.header}>
      <Grid className={styles.grid}>
        <Column sm={4} md={8} lg={16} className={styles.column}>
          <div className={styles.title} ref={heroRef}>
            <h1>Alison Joseph</h1>
            <p className={styles.subtitle} role="doc-subtitle">
              Design Systems Leader
            </p>
          </div>
        </Column>
      </Grid>
      <div className={styles.navigation__container}>
        <CarbonHeader aria-label="navigation">
          <SkipToContent />
          <Grid className={styles.navigation}>
            <Column sm={4} md={8} lg={16}>
              <div className={styles.navContent}>
                <div
                  className={`${styles.navName} ${
                    showNameInNav ? styles.navNameVisible : ""
                  }`}
                >
                  Alison Joseph
                  <span>Design Systems Leader</span>
                </div>
                <div className={styles.menuContainer}>
                  <HeaderNavigation aria-label="Alison Joseph">
                    <HeaderMenuItem href="#about">About</HeaderMenuItem>
                    <HeaderMenuItem href="#work">Work</HeaderMenuItem>
                    <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
                  </HeaderNavigation>
                  <ThemeSwitcher />
                </div>
              </div>
            </Column>
          </Grid>
        </CarbonHeader>
      </div>
    </div>
  );
};

export default Header;
