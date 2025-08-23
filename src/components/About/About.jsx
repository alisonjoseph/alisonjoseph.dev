import React from "react";
import { Link, Grid, Column } from "@carbon/react";

import styles from "./About.module.scss";

const About = () => {
  return (
    <Grid as="section" id="about">
      <Column sm={4} md={6} lg={12}>
        <p className={styles.p}>
          Hi, I'm <em>Alison</em>. I'm an engineering manager and development
          lead on IBM's Carbon Design System. I love working in the space where{" "}
          <em>design meets code</em>, leading teams that build and maintain our
          component library and partnering with leaders across the business to
          scale design system adoption.
        </p>
      </Column>
    </Grid>
  );
};

export default About;
