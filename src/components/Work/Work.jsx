import React from "react";
import Image from "next/image";
import WorkItem from "../WorkItem";
import { Grid, Column, UnorderedList, ListItem, Link } from "@carbon/react";
import {
  LogoGithub,
  Notebook,
  Wikis,
  PresentationFile,
  Microphone,
} from "@carbon/icons-react";

const LogoMedium = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Medium logo"
    style={{ minWidth: "16px", minHeight: "16px" }}
    {...props}
  >
    <rect width="1024" height="1024" rx="179.649" fill="black" />
    <path
      d="M1024 704.736V797.736C1018.16 798.3 1012.16 798.588 1006 798.588C896.061 798.588 834.166 707.016 831.497 592.432C831.418 588.002 831.448 583.6 831.546 579.228C831.606 576.501 831.714 573.783 831.852 571.075C831.921 569.628 831.989 568.269 832.098 566.753C832.206 565.236 832.315 563.72 832.443 562.204C836.401 511.613 852.687 466.594 879.568 433.284C896.267 412.606 916.334 396.852 939.09 386.316C959.078 376.253 987.17 370.699 1010.07 370.699H1011.06C1015.4 370.699 1019.71 370.844 1024 371.13V396.717C1019.45 395.47 1014.58 394.801 1009.4 394.715C963.086 395.67 935.486 451.145 932.049 528.007H1024V549.669H929.972L929.942 549.689C925.703 624.579 966.692 687.87 1024 704.736Z"
      fill="white"
    />
    <path
      d="M836.115 244.625L836.923 244.448V238.195H672.014L518.891 598.084L365.768 238.195H188.059V244.448L188.857 244.625C218.957 251.419 234.239 261.551 234.239 298.091V725.872C234.239 762.412 218.898 772.544 188.798 779.338L188 779.516V785.788H308.57V779.535L307.773 779.358C277.672 772.564 262.39 762.432 262.39 725.892V322.905L459.093 785.788H470.249L672.683 309.996V736.457C670.104 765.317 654.96 774.228 627.705 780.382L626.897 780.569V786.773H836.923V780.569L836.115 780.382C808.831 774.228 793.322 765.317 790.743 736.457L790.605 298.091H790.743C790.743 261.551 806.024 251.419 836.115 244.625Z"
      fill="white"
    />
  </svg>
);

import styles from "./Work.module.scss";

const Work = () => {
  return (
    <Grid condensed as="section" id="work" className={styles.grid}>
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
              src: "/images/uishell.png",
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
                icon: <Notebook />,
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
            summary="Expanded accessibility testing across Carbon React and introduced a dashboard that gives teams clear, real-time visibility into component accessibility status. This work improved confidence in coverage and made accessibility progress easy to track across the library."
            image={{
              src: "/images/a11y.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon/blob/main/e2e/components/Accordion/Accordion-test.avt.e2e.js",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://carbondesignsystem.com/components/overview/accessibility-status/",
                label: "Accessibility status",
                icon: <Wikis />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: (
                  <p>
                    I expanded accessibility testing coverage for Carbon React
                    components and developed a dynamic status dashboard to
                    surface results on the website. The dashboard pulls in
                    updated test coverage with each release, displaying
                    accessibility status both on individual component pages and
                    in a consolidated view. This gave teams immediate visibility
                    into coverage and reduced risk for products building on
                    Carbon by making gaps clear and actionable.
                  </p>
                ),
              },
              {
                heading: "Background",
                content: (
                  <>
                    {" "}
                    <p>
                      Carbon is IBM’s open-source design system, providing the
                      foundation for digital products across IBM. Accessibility
                      is a non-negotiable requirement for adoption, but testing
                      coverage for Carbon React components was inconsistent.
                      Some components had strong accessibility validation, while
                      others had little or none, making it hard to know whether
                      they could be safely relied on in products.
                    </p>
                    <p>
                      Even when tests existed, the results weren’t visible in a
                      central place. Teams often lacked awareness of
                      accessibility gaps and had no clear way to track progress
                      across the library. What was needed was both stronger,
                      more consistent test coverage and a way to surface results
                      publicly so that teams could make informed decisions and
                      prioritize improvements.
                    </p>
                  </>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      We began with a full audit of Carbon React components to
                      establish a baseline of accessibility coverage. This
                      revealed which components had tests in place and where
                      significant gaps remained. To make the work visible and
                      actionable, we created individual GitHub issues for each
                      component, grouped under a central{" "}
                      <Link
                        href="https://github.com/carbon-design-system/carbon/issues/13745"
                        size="lg"
                        inline
                        rel="noopener noreferrer"
                      >
                        epic
                      </Link>{" "}
                      so progress could be tracked across the library.
                    </p>

                    <p>
                      With priorities in place, we expanded automated
                      accessibility testing directly in Carbon React, adding new
                      tests to close gaps. Test results were then exported from
                      the React codebase, making it possible to surface coverage
                      status externally.
                    </p>

                    <p>
                      On the Carbon website, I partnered with design to build a
                      configurable MDX component that could pull in these
                      results dynamically. The component was designed with
                      variant selectors to display accessibility status in
                      multiple contexts:
                    </p>

                    <UnorderedList>
                      <ListItem>
                        <Link
                          href="https://carbondesignsystem.com/components/dropdown/usage/#accessibility-testing-statusobject-objectobject-object"
                          size="lg"
                          inline
                          rel="noopener noreferrer"
                        >
                          Card view on usage pages
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          href="https://carbondesignsystem.com/components/dropdown/accessibility/#accessibility-testing-statusobject-objectobject-object"
                          size="lg"
                          inline
                          rel="noopener noreferrer"
                        >
                          Table view on accessibility tabs
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          href="https://carbondesignsystem.com/components/overview/accessibility-status/"
                          size="lg"
                          inline
                          rel="noopener noreferrer"
                        >
                          Full accessibility status page
                        </Link>
                      </ListItem>
                    </UnorderedList>

                    <p>
                      The result was a transparent system where accessibility
                      coverage could be tracked at the component, category, and
                      library level. Extending this dashboard to the internal
                      Carbon for IBM Products site gave IBM teams the same
                      clarity and confidence in accessibility readiness.
                    </p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>
                      One challenge was the lack of consistency in how
                      accessibility tests were named across components. Without
                      a standard, the reporting wouldn’t align correctly, so we
                      had to refactor and normalize test names to make the
                      dashboard reliable.
                    </p>
                    <p>
                      Another challenge was accounting for components with
                      multiple variants. Each variant required its own testing
                      and status reporting, which added complexity to both the
                      test suite and the way results were displayed.
                    </p>
                    <p>
                      We also faced mismatches between naming conventions in
                      Carbon React and the Carbon website. To bridge this gap,
                      we wrote custom logic to ensure results were surfaced
                      correctly and tied back to the right component pages. This
                      extra mapping work was essential to keep the dashboard
                      accurate and trustworthy.
                    </p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>
                      The most significant outcome of this work was improved
                      accessibility test coverage across the Carbon React
                      library. By adding new automated tests and closing gaps
                      identified in the audit, we established a consistent
                      baseline of accessibility validation for components that
                      teams across IBM could rely on.
                    </p>
                    <p>
                      In parallel, we built a dashboard that surfaced those
                      results on the Carbon website, giving teams immediate
                      insight into accessibility status at the component, page,
                      and library level. Extending the same experience to the
                      internal Carbon for IBM Products site gave IBM teams a
                      unified view of coverage across the design system.
                    </p>
                    <p>
                      Together, these improvements reduced risk for products
                      building on Carbon and increased confidence in
                      accessibility compliance. By pairing stronger test
                      coverage with transparent reporting, we not only improved
                      the technical foundation of the library but also created
                      accountability and a model for sustaining accessibility
                      going forward.
                    </p>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Figma Code Connect · Carbon Integration"
            summary={
              <>
                <p className={styles.introLink}>
                  <LogoMedium />
                  <Link
                    rel="noopener"
                    size="md"
                    href="https://medium.com/carbondesign/carbon-and-figma-code-connect-redefining-the-design-to-code-experience-836eb3f454fc"
                  >
                    Carbon and Figma Code Connect: Redefining the Design-to-Code
                    Experience
                  </Link>
                </p>
                <p>
                  Code Connect bridges the gap between design and development by
                  making design system component code directly accessible in
                  Figma’s Dev Mode. This integration allows developers to view
                  real Carbon React code within Figma, ensuring consistency and
                  accuracy throughout the design-to-code process.
                </p>
              </>
            }
            image={{
              src: "/images/codeconnect.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon/tree/main/packages/react/code-connect",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://medium.com/carbondesign/carbon-and-figma-code-connect-redefining-the-design-to-code-experience-836eb3f454fc",
                label: "Medium Article",
                icon: <LogoMedium />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: (
                  <p>
                    I led the integration of Carbon React with Figma Code
                    Connect, embedding React component code directly into
                    Figma’s Dev Mode. This closed the gap between design and
                    development by letting teams access real Carbon code without
                    leaving Figma, reducing context switching and guesswork
                    during handoff. Beyond developer efficiency, this
                    integration also powers a new generation of design-to-code
                    AI plugins in Figma, where Carbon’s connected components
                    provide the underlying source of truth for generating more
                    accurate code.
                  </p>
                ),
              },
              {
                heading: "Background",
                content: (
                  <>
                    <p>
                      The gap between design and development has long been a
                      pain point for product teams. Designers hand off specs
                      that often require interpretation, while developers
                      reference separate documentation, Storybook, or code
                      repositories. This back-and-forth creates inefficiencies,
                      increases the risk of errors, and leads to inconsistent
                      user experiences.
                    </p>
                    <p>
                      Figma’s launch of Code Connect in Dev Mode provided an
                      opportunity to close this gap by bringing live component
                      code directly into the design tool. For Carbon,
                      integrating with Code Connect meant that developers could
                      see and copy real React code directly from Figma
                      components. This not only streamlined workflows but also
                      ensured Carbon was implemented consistently across IBM and
                      beyond. Importantly, the same connected code now serves as
                      the foundation for AI-driven design-to-code plugins,
                      enabling Figma to generate more accurate and
                      production-ready code for teams using Carbon.
                    </p>
                  </>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      To manage the integration, I created an{" "}
                      <Link
                        inline
                        size="lg"
                        rel="noopener"
                        href="https://github.com/carbon-design-system/carbon/issues/16273"
                      >
                        epic
                      </Link>{" "}
                      in Github and opened an issue for each component in the
                      Carbon React library. I then worked through them one by
                      one, mapping each Figma component to its React counterpart
                      in @carbon/react. This ensured consistency across the
                      library and made progress visible and trackable.
                    </p>
                    <p>
                      Because Code Connect was still in beta, we partnered
                      directly with the Figma team throughout the process. We
                      provided feedback, reported issues, and validated fixes,
                      helping shape the feature as it matured toward GA
                    </p>
                    <p>
                      To keep everything in sync, we set up continuous
                      integration with GitHub Actions so Code Connect updates
                      would automatically publish from @carbon/react to Figma.
                      This eliminated manual updates and ensured that the code
                      surfaced in Dev Mode always reflected the most current
                      Carbon release.
                    </p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>
                      One challenge was that component names and structures
                      often differed between Figma and React. Fortunately, Code
                      Connect supports explicit mapping, which allowed us to
                      align components and also handle variants. This meant we
                      could map one Figma component to multiple React
                      components, or the reverse, without losing accuracy.
                    </p>
                    <p>
                      The mapping process also revealed inconsistencies between
                      the Figma library and the React components, including
                      missing props. We tracked these issues across both
                      libraries and fixed them as part of the work, which not
                      only improved the Code Connect integration but also
                      strengthened the underlying system.
                    </p>
                    <p>
                      Another challenge was keeping the integration in sync as
                      both libraries evolved. To address this, we built Code
                      Connect updates into our definition of done and educated
                      designers on what constitutes a breaking change in Figma.
                      This ensured that whenever the Figma library was updated,
                      the Code Connect mappings were updated in parallel.
                    </p>
                    <p>
                      Finally, working while Code Connect was still in beta
                      presented its own hurdles, from unexpected bugs to
                      evolving functionality. We solved this by maintaining a
                      direct connection with the Figma team, providing feedback,
                      and validating fixes as they rolled out. This close
                      collaboration helped stabilize the feature and ensure it
                      worked for Carbon at scale.
                    </p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>
                      The integration gave developers direct access to accurate
                      React code inside Figma, reducing context switching and
                      eliminating much of the guesswork during handoff. This
                      made implementation faster and more consistent, helping
                      teams translate design intent into production code with
                      greater confidence.
                    </p>
                    <p>
                      By baking Code Connect updates into our workflows and
                      educating designers on breaking changes, we established a
                      sustainable process for keeping design and code in sync.
                      This reduced the risk of drift between the Figma library
                      and the React components and created a repeatable model
                      for ongoing maintenance.
                    </p>
                    <p>
                      Beyond immediate efficiency gains, the work laid the
                      foundation for AI-driven design-to-code workflows. Because
                      Carbon’s connected components now serve as a single source
                      of truth, they also power Figma plugins that generate more
                      accurate code automatically. This positions Carbon not
                      only as a design system but as an enabler of the next wave
                      of intelligent, AI-assisted tooling.
                    </p>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon for AI"
            summary="summary here"
            image={{
              src: "/images/ai.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://github.com/carbon-design-system/carbon",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://react.carbondesignsystem.com/?path=/docs/components-ailabel--overview",
                label: "Storybook",
                icon: <Notebook />,
              },

              {
                href: "https://carbondesignsystem.com/guidelines/carbon-for-ai/",
                label: "Guidelines",
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
                icon: <Notebook />,
              },
              {
                href: "https://www.knapsack.cloud/patterns",
                label: "Speaker",
                icon: <Microphone />,
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
                icon: <Notebook />,
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
                icon: <Notebook />,
              },
              {
                href: "https://www.gatsbyjs.com/ibm-themes-webinar/",
                label: "Gatsby webinar",
                icon: <PresentationFile />,
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
