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
            rel="noopener"
          >
            LinkedIn
          </Link>{" "}
          and{" "}
          <Link
            inline
            size="lg"
            href="https://github.com/alisonjoseph"
            rel="noopener"
          >
            GitHub
          </Link>
          . You can also grab my{" "}
          <Link inline size="lg" href="/files/alisonjoseph.pdf" rel="noopener">
            resume here
          </Link>
          .
        </p>
      </Column>
    </Grid>
  );
};

export default Contact;
