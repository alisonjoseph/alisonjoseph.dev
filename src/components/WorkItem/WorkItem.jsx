import React, { useState } from "react";
import Image from "next/image";
import { Grid, Column, Link, Button } from "@carbon/react";
import { ChevronDown, ChevronUp } from "@carbon/icons-react";
import styles from "./WorkItem.module.scss";

function WorkItem({ title, image, links = [], sections = [], summary }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`${styles.item} ${expanded ? styles.expanded : ""}`}>
      <Grid>
        <Column sm={4} md={5} lg={10}>
          <h3>{title}</h3>

          {summary && <p className={styles.summary}>{summary}</p>}
        </Column>
        <Column sm={4} md={3} lg={6} className={styles.imageContainer}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt || ""}
          />
          {links.length > 0 && (
            <ul className={styles.links}>
              {links.map(({ href, label, icon }, i) => (
                <li key={i} className={styles.link}>
                  {icon}
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          )}
        </Column>
      </Grid>

      {sections.map(({ heading, content }, i) => (
        <Grid key={i} className={styles.section}>
          <Column sm={4} md={2} lg={4}>
            <h4>{heading}</h4>
          </Column>
          <Column sm={4} md={6} lg={12}>
            {content}
          </Column>
        </Grid>
      ))}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <Button
            renderIcon={expanded ? ChevronUp : ChevronDown}
            size="sm"
            kind="tertiary"
            className={styles.toggle}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Read more"}
          </Button>
        </Column>
      </Grid>
    </article>
  );
}

export default WorkItem;
