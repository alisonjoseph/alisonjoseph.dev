import React, { useEffect, useRef, useState } from "react";
import {
  Header as CarbonHeader,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
  Grid,
  Column,
} from "@carbon/react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div aria-label="header" className={styles.header}>
      <Grid className={styles.grid}>
        <Column sm={4} md={8} lg={16} className={styles.column}>
          <div className={styles.title}>
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
              <HeaderNavigation aria-label="Alison Joseph">
                <HeaderMenuItem href="#about">About</HeaderMenuItem>
                <HeaderMenuItem href="#Work">Work</HeaderMenuItem>
                <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
              </HeaderNavigation>
            </Column>
          </Grid>
        </CarbonHeader>
      </div>
    </div>
  );
};

export default Header;
