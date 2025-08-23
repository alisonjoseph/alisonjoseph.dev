import React from "react";
import { Link, Grid, Column } from "@carbon/react";

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <Grid as="section" id="contact" className={styles.section}>
      <Column sm={4} md={6} lg={12}>
        <p>
          Let’s connect! I’m based in the <em>Austin, TX</em> area, you can
          reach me at{" "}
          <Link inline size="lg" href="mailto:alisonejoseph@gmail.com">
            alisonejoseph@gmail.com
          </Link>{" "}
          or find me on{" "}
          <Link
            inline
            size="lg"
            href="https://www.linkedin.com/in/alisonjoseph/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </Link>{" "}
          and{" "}
          <Link
            inline
            size="lg"
            href="https://github.com/alisonjoseph"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Link>
          .
        </p>
      </Column>
    </Grid>
  );
};

export default Contact;
