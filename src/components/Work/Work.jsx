import React from "react";
import Image from "next/image";
import WorkItem from "../WorkItem";
import { Grid, Column, UnorderedList, ListItem, Link } from "@carbon/react";
import { LogoGithub, Wikis } from "@carbon/icons-react";

import styles from "./Work.module.scss";

const Work = () => {
  return (
    <Grid condensed as="section" id="Work" className={styles.grid}>
      <Column sm={4} md={8} lg={16}>
        {/* <Grid>
          <Column sm={4} md={8} lg={16}>
            <h2>Work</h2>
          </Column>
        </Grid> */}
        <div className={styles.items}>
          <WorkItem
            title="Carbon Design System · UI Shell Improvements in Carbon Labs"
            summary="The Carbon UI Shell was expanded and enhanced in Carbon Labs to create a consistent, unified experience across IBM Software. Building on the existing shell, the work added new React components where gaps existed and aligned diverse business needs into shared patterns."
            image={{
              src: "/images/labs.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon-labs/tree/main/packages/react/src/components/UIShell",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://labs.carbondesignsystem.com/?path=/story/react_components-uishell--demo",
                label: "Storybook",
                icon: <Wikis />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: (
                  <p>
                    As a development lead for IBM&apos;s Carbon Design System, I
                    was responsible for expanding and enhancing the UI Shell to
                    create a consistent platform experience across IBM Software.
                    This effort involved building on the existing Carbon Shell,
                    enhancing what was already there and adding new React
                    components where gaps existed. Partnering closely with
                    Carbon designers as well as design leaders and VPs from
                    across the business, I helped balance diverse needs and
                    align on shared patterns. By working in Carbon Labs, an
                    open-source innovation space, we were able to move quickly,
                    prototype and test ideas, and gain consensus on a unified
                    shell approach.
                  </p>
                ),
              },
              {
                heading: "Background",
                content: (
                  <p>
                    Carbon is IBM’s open source design system for digital
                    products, providing a shared foundation of components,
                    patterns, and guidelines. While it was widely adopted, the
                    UI Shell hadn’t been updated much since its first release
                    and there wasn’t clear guidance on how to compose
                    navigation. Product teams filled the gaps on their own,
                    which led to fragmented and inconsistent experiences across
                    IBM Software. Many products also had needs that the current
                    Shell couldn’t solve. Some required multi-product
                    navigation, others needed deep nesting or filtering. These
                    gaps and inconsistencies made it clear that a common
                    platform and UI Shell experience was needed.
                  </p>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      I facilitated regular working sessions with design leaders
                      from across IBM&apos;s business units while also leading
                      the hands-on development with a small dev team. I
                      organized our sprints, sized the work, and contributed
                      directly to building the new components. We partnered
                      early with IBM&apos;s accessibility team to test as we
                      built, making sure the Shell met accessibility
                      requirements from the start. Working in Carbon Labs gave
                      us the freedom to move quickly without being constrained
                      by the stability requirements of the core library.
                    </p>
                    <p>My work centered on:</p>
                    <UnorderedList>
                      <ListItem>
                        <strong>Rapid prototyping:</strong> Partnering with
                        designers to explore navigation patterns and
                        interactions, validating them with stakeholders before
                        finalizing.
                      </ListItem>
                      <ListItem>
                        <strong>Balancing needs:</strong> Accounting for varied
                        business requirements, from multi-product navigation to
                        deep nesting and filtering.
                      </ListItem>
                      <ListItem>
                        <strong>Building flexibility:</strong> Developing a new
                        shell structure made of composable React components,
                        including a double-wide main navigation for
                        multi-product access, a mobile-friendly version with
                        back navigation, and a configurable in-product rail with
                        pinning and auto expansion.
                      </ListItem>
                      <ListItem>
                        <strong>Ensuring compatibility:</strong> Even while
                        building in Carbon Labs, we made sure our work
                        wouldn&apos;t break the existing functionality in the
                        core Carbon React library, then promote back into Carbon
                        React.
                      </ListItem>
                      <ListItem>
                        <strong>Stakeholder alignment:</strong> Using Labs as a
                        safe place to &quot;break&quot; and iterate fast, while
                        building trust that the final design would meet broad
                        needs.
                      </ListItem>
                    </UnorderedList>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>
                      One of the biggest challenges was the wide range of
                      product needs. Some teams required robust multi-product
                      navigation, while others prioritized lighter
                      single-product rails. Others needed deep nesting or
                      filtering. Balancing these competing needs while still
                      driving toward a unified Shell experience required
                      constant iteration and compromise.
                    </p>
                    <p>
                      Another challenge was rebuilding trust in the Shell
                      itself. Because it hadn’t been updated in years, many
                      teams had already built their own variations and were
                      skeptical that a shared solution could meet their needs
                      without heavy customization.
                    </p>
                    <p>
                      We also had to move quickly without compromising
                      stability. Even though we were working in Carbon Labs, the
                      long-term goal was always to promote the Shell back into
                      core Carbon. That meant every decision had to balance the
                      freedom to experiment with the discipline to keep the
                      codebase aligned with core standards.
                    </p>
                    <p>
                      Finally, there was the challenge of aligning stakeholders
                      across IBM. We worked with Carbon designers, design
                      leaders, and VPs from multiple business units, each with
                      their own priorities and perspectives. Building consensus
                      at this scale required steady communication and
                      facilitation to keep everyone moving toward the same goal.
                    </p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>
                      The project delivered an improved set of composable React
                      components for the UI Shell, providing a consistent and
                      flexible foundation that could scale across IBM Software.
                      By enhancing existing functionality and adding new
                      components where gaps existed, we gave teams a clear,
                      unified way to build navigation patterns.
                    </p>
                    <p>
                      Early adoption has shown strong alignment across business
                      units. Teams that previously built their own shells are
                      now implementing the new components, and we have full
                      instrumentation in place to collect data and guide
                      adjustments. This process also created a repeatable model
                      for how Carbon Labs can be used to experiment, validate
                      with stakeholders, and then promote work into the core
                      library without risking stability.
                    </p>
                    <p>
                      Beyond the technical output, the outcomes included
                      stronger cross-business collaboration and renewed trust in
                      the Shell as a shared solution. By involving accessibility
                      testing from the start and aligning on usage patterns, we
                      set the stage for a Shell that meets diverse needs while
                      maintaining consistency across IBM’s work.
                    </p>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon Accessibility Testing & Status Dashboard"
            summary="summary here"
            image={{
              src: "/images/labs.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon-labs/tree/main/packages/react/src/components/UIShell",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://labs.carbondesignsystem.com/?path=/story/react_components-uishell--demo",
                label: "Storybook",
                icon: <Wikis />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: <p>summary</p>,
              },
              {
                heading: "Background",
                content: <p>background</p>,
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>approach</p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>challenges</p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>outcomes</p>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Figma Code Connect · Carbon Integration"
            summary="summary here"
            image={{
              src: "/images/labs.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon-labs/tree/main/packages/react/src/components/UIShell",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://labs.carbondesignsystem.com/?path=/story/react_components-uishell--demo",
                label: "Storybook",
                icon: <Wikis />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: <p>summary</p>,
              },
              {
                heading: "Background",
                content: <p>background</p>,
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>approach</p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>challenges</p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>outcomes</p>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon for AI"
            summary="summary here"
            image={{
              src: "/images/labs.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon-labs/tree/main/packages/react/src/components/UIShell",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://labs.carbondesignsystem.com/?path=/story/react_components-uishell--demo",
                label: "Storybook",
                icon: <Wikis />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: <p>summary</p>,
              },
              {
                heading: "Background",
                content: <p>background</p>,
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>approach</p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>challenges</p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>outcomes</p>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon Design System"
            summary="summary here"
            image={{
              src: "/images/labs.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon-labs/tree/main/packages/react/src/components/UIShell",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://labs.carbondesignsystem.com/?path=/story/react_components-uishell--demo",
                label: "Storybook",
                icon: <Wikis />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: <p>summary</p>,
              },
              {
                heading: "Background",
                content: <p>background</p>,
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>approach</p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>challenges</p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>outcomes</p>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="IBM Acquisitions · Carbon Migration Program"
            summary="summary here"
            image={{
              src: "/images/labs.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon-labs/tree/main/packages/react/src/components/UIShell",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://labs.carbondesignsystem.com/?path=/story/react_components-uishell--demo",
                label: "Storybook",
                icon: <Wikis />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: <p>summary</p>,
              },
              {
                heading: "Background",
                content: <p>background</p>,
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>approach</p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>challenges</p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>outcomes</p>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon Gatsby Theme"
            summary="summary here"
            image={{
              src: "/images/labs.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon-labs/tree/main/packages/react/src/components/UIShell",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://labs.carbondesignsystem.com/?path=/story/react_components-uishell--demo",
                label: "Storybook",
                icon: <Wikis />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: <p>summary</p>,
              },
              {
                heading: "Background",
                content: <p>background</p>,
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>approach</p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>challenges</p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>outcomes</p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Column>
    </Grid>
  );
};

export default Work;
