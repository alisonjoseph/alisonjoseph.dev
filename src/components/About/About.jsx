import React from "react";
import { Link, Grid, Column } from "@carbon/react";

import styles from "./About.module.scss";

const About = () => {
  return (
    <Grid as="section" id="about">
      <Column sm={4} md={6} lg={12}>
        <p className={styles.p}>
          Hi, I'm <em>Alison</em>. I'm an engineering leader who loves working
          in the space where <em>design meets code</em>. I enjoy solving
          problems that let me blend my design background with my love for
          clean, accessible code, paying close attention to typography, detail,
          and craft. As a leader on IBM’s Carbon Design System team, I help
          bring these principles to life at scale.
        </p>
      </Column>
    </Grid>
  );
};

export default About;
