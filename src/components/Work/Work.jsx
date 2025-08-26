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
  LogoNpm,
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
        <div className={styles.items}>
          <WorkItem
            title="UI Shell Improvements in Carbon Labs"
            intro={
              <p>
                The Carbon UI Shell was expanded and enhanced in Carbon Labs to
                create a consistent, unified experience across IBM Software.
                Building on the existing shell, the work added new React
                components where gaps existed and aligned diverse business needs
                into shared patterns.
              </p>
            }
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
                    As development lead, expanded and enhanced Carbon's UI Shell
                    to create a consistent platform experience across IBM
                    Software. Built on the existing Carbon Shell by adding new
                    React components where gaps existed and aligning diverse
                    business needs into shared patterns. Partnered closely with
                    Carbon designers and design leaders from across the business
                    to balance varied requirements while working in Carbon Labs
                    for rapid prototyping and validation.
                  </p>
                ),
              },
              {
                heading: "Background",
                content: (
                  <>
                    <p>
                      <strong>The Challenge:</strong> Carbon's UI Shell hadn't
                      been updated much since its first release and lacked clear
                      guidance on navigation composition. Product teams filled
                      gaps independently, leading to fragmented and inconsistent
                      experiences across IBM Software. Many products had needs
                      the current Shell couldn't solve - multi-product
                      navigation, deep nesting, or filtering capabilities.
                    </p>
                    <p>
                      <strong>My Role:</strong> As development lead, I
                      facilitated working sessions with design leaders from
                      across IBM's business units while leading hands-on
                      development with a small team. I organized sprints, sized
                      work, and contributed directly to building new components.
                    </p>
                  </>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      <strong>Cross-functional Collaboration:</strong>{" "}
                      Facilitated regular working sessions with design leaders
                      while leading development. Partnered early with IBM's
                      accessibility team to test as we built, ensuring the Shell
                      met accessibility requirements from the start.
                    </p>

                    <p>
                      <strong>Key Focus Areas:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        <strong>Rapid prototyping:</strong> Partnered with
                        designers to explore navigation patterns and
                        interactions, validating them with stakeholders before
                        finalizing
                      </ListItem>
                      <ListItem>
                        <strong>Balancing needs:</strong> Accounted for varied
                        business requirements, from multi-product navigation to
                        deep nesting and filtering
                      </ListItem>
                      <ListItem>
                        <strong>Building flexibility:</strong> Developed
                        composable React components including double-wide main
                        navigation, mobile-friendly version with back
                        navigation, and configurable in-product rail with
                        pinning and auto expansion
                      </ListItem>
                      <ListItem>
                        <strong>Ensuring compatibility:</strong> Maintained
                        compatibility with existing Carbon React functionality
                        while building in Labs for eventual promotion back to
                        core
                      </ListItem>
                      <ListItem>
                        <strong>Stakeholder alignment:</strong> Used Labs as a
                        safe space to iterate quickly while building trust that
                        the final design would meet broad needs
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
                      <strong>Diverse Product Requirements:</strong> Teams had
                      vastly different needs - some required robust
                      multi-product navigation, others prioritized lighter
                      single-product rails, and others needed deep nesting or
                      filtering. Balancing these competing needs while driving
                      toward a unified Shell experience required constant
                      iteration and compromise.
                    </p>

                    <p>
                      <strong>Rebuilding Trust:</strong> Because the Shell
                      hadn't been updated in years, many teams had built their
                      own variations and were skeptical that a shared solution
                      could meet their needs without heavy customization.
                    </p>

                    <p>
                      <strong>Balancing Speed and Stability:</strong> Had to
                      move quickly without compromising stability. Every
                      decision balanced the freedom to experiment in Labs with
                      the discipline to keep code aligned with core standards
                      for eventual promotion.
                    </p>

                    <p>
                      <strong>Cross-Business Alignment:</strong> Worked with
                      Carbon designers, design leaders, and VPs from multiple
                      business units, each with their own priorities. Building
                      consensus at this scale required steady communication and
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
                      <strong>Technical Deliverables:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Delivered improved set of composable React components
                        providing consistent and flexible foundation that can
                        scale across IBM Software
                      </ListItem>
                      <ListItem>
                        Enhanced existing functionality and added new components
                        where gaps existed, giving teams a clear, unified way to
                        build navigation patterns
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Early Adoption:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Teams that previously built custom shells are beginning
                        to implement the new components, with product teams
                        adding their own instrumentation to guide future
                        iterations
                      </ListItem>
                      <ListItem>
                        Created repeatable model for using Carbon Labs to
                        experiment, validate with stakeholders, and promote work
                        into core library without risking stability
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Process and Collaboration:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Strengthened cross-business collaboration and renewed
                        trust in the Shell as a shared solution
                      </ListItem>
                      <ListItem>
                        Established accessibility testing from the start and
                        aligned on usage patterns for consistent experience
                        across IBM's portfolio
                      </ListItem>
                    </UnorderedList>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon Accessibility Testing & Status Dashboard"
            intro={
              <p>
                Expanded accessibility testing across Carbon React and
                introduced a dashboard that gives teams clear, real-time
                visibility into component accessibility status. This work
                improved confidence in coverage and made accessibility progress
                easy to track across the library.
              </p>
            }
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
                    Expanded accessibility testing coverage for Carbon React
                    components and developed a dynamic status dashboard to
                    surface results on the website. The dashboard pulls updated
                    test coverage with each release, displaying accessibility
                    status both on individual component pages and in a
                    consolidated view. This gave teams immediate visibility into
                    coverage and reduced risk for products building on Carbon by
                    making gaps clear and actionable.
                  </p>
                ),
              },
              {
                heading: "Background",
                content: (
                  <>
                    <p>
                      <strong>The Challenge:</strong> Carbon's accessibility
                      testing coverage for React components was inconsistent.
                      Some components had strong accessibility validation, while
                      others had little or none, making it hard to know whether
                      they could be safely relied on in products. Even when
                      tests existed, results weren't visible in a central place,
                      leaving teams unaware of accessibility gaps.
                    </p>
                    <p>
                      <strong>The Need:</strong> Both stronger, more consistent
                      test coverage and a way to surface results publicly so
                      teams could make informed decisions and prioritize
                      improvements.
                    </p>
                    <p>
                      <strong>My Role:</strong> Led the expansion of
                      accessibility testing and built the dashboard system to
                      surface results across the Carbon website and internal
                      Carbon for IBM Products site.
                    </p>
                  </>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      <strong>Accessibility Audit:</strong> Conducted full audit
                      of Carbon React components to establish baseline coverage.
                      Created individual GitHub issues for each component,
                      grouped under a central{" "}
                      <Link
                        href="https://github.com/carbon-design-system/carbon/issues/13745"
                        size="lg"
                        inline
                        rel="noopener noreferrer"
                      >
                        epic
                      </Link>{" "}
                      to track progress across the library.
                    </p>

                    <p>
                      <strong>Expanded Testing:</strong> Added automated
                      accessibility tests directly in Carbon React to close
                      identified gaps. Exported test results from the React
                      codebase to make coverage status externally accessible.
                    </p>

                    <p>
                      <strong>Dashboard Development:</strong> Partnered with
                      design to build configurable MDX components that could
                      pull in results dynamically. Designed with variant
                      selectors to display accessibility status in multiple
                      contexts:
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
                      <strong>Integration:</strong> Extended dashboard to
                      internal Carbon for IBM Products site, giving IBM teams
                      the same clarity and confidence in accessibility readiness
                      across the greater Carbon ecosystem.
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
            intro={
              <>
                <p>
                  Code Connect bridges the gap between design and development by
                  making design system component code directly accessible in
                  Figma's Dev Mode. This integration allows developers to view
                  real Carbon React code within Figma, ensuring consistency and
                  accuracy throughout the design-to-code process.
                </p>{" "}
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
                    Led the integration of Carbon React with Figma Code Connect,
                    embedding React component code directly into Figma's Dev
                    Mode. This closed the gap between design and development by
                    letting teams access real Carbon code without leaving Figma,
                    reducing context switching and guesswork during handoff. The
                    integration also powers a new generation of design-to-code
                    AI plugins in Figma, where Carbon's connected components
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
                      <strong>The Challenge:</strong> The gap between design and
                      development created inefficiencies for product teams.
                      Designers handed off specs that required interpretation,
                      while developers referenced separate documentation,
                      Storybook, or code repositories. This back-and-forth
                      increased the risk of errors and led to inconsistent user
                      experiences.
                    </p>
                    <p>
                      <strong>The Opportunity:</strong> Figma's launch of Code
                      Connect in Dev Mode provided a chance to bring live
                      component code directly into the design tool. For Carbon,
                      this meant developers could see and copy real React code
                      directly from Figma components, streamlining workflows and
                      ensuring consistent implementation. The same connected
                      code now serves as the foundation for AI-driven
                      design-to-code plugins.
                    </p>
                    <p>
                      <strong>My Role:</strong> As the technical lead, I owned
                      the integration strategy, component mapping, and
                      automation setup while partnering directly with Figma's
                      team during the beta phase.
                    </p>
                  </>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      <strong>Systematic Component Mapping:</strong> Created an
                      epic in Github and opened an issue for each component in
                      the Carbon React library. Worked through them
                      systematically, mapping each Figma component to its React
                      counterpart in @carbon/react to ensure consistency and
                      trackable progress.
                    </p>

                    <p>
                      <strong>Beta Partnership:</strong> Collaborated directly
                      with the Figma team throughout the process, providing
                      feedback, reporting issues, and validating fixes to help
                      shape the feature as it matured toward GA.
                    </p>
                  </>
                ),
              },
              {
                heading: "Challenges",
                content: (
                  <>
                    <p>
                      <strong>Component Name Mismatches:</strong> Component
                      names and structures often differed between Figma and
                      React. Code Connect's explicit mapping capability allowed
                      us to align components and handle variants, mapping one
                      Figma component to multiple React components or vice versa
                      without losing accuracy.
                    </p>

                    <p>
                      <strong>Library Inconsistencies:</strong> The mapping
                      process revealed inconsistencies between the Figma library
                      and React components, including missing props. We tracked
                      these issues across both libraries and fixed them as part
                      of the work, strengthening the underlying system.
                    </p>

                    <p>
                      <strong>Maintaining Sync:</strong> Built Code Connect
                      updates into our definition of done and educated designers
                      on what constitutes a breaking change in Figma. This
                      ensured that whenever the Figma library was updated, the
                      Code Connect mappings were updated in parallel.
                    </p>

                    <p>
                      <strong>Beta Instability:</strong> Working with Code
                      Connect in beta presented hurdles from unexpected bugs to
                      evolving functionality. Maintained direct connection with
                      the Figma team, providing feedback and validating fixes as
                      they rolled out to help stabilize the feature for Carbon
                      at scale.
                    </p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>
                      <strong>Developer Efficiency:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Gave developers direct access to accurate React code
                        inside Figma, reducing context switching and eliminating
                        guesswork during handoff
                      </ListItem>
                      <ListItem>
                        Made implementation faster and more consistent, helping
                        teams translate design intent into production code with
                        greater confidence
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Sustainable Process:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Established repeatable workflows by baking Code Connect
                        updates into definition of done and educating designers
                        on breaking changes
                      </ListItem>
                      <ListItem>
                        Reduced risk of drift between Figma library and React
                        components through automated sync process
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>AI-Powered Future:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Laid the foundation for AI-driven design-to-code
                        workflows where Carbon's connected components serve as
                        single source of truth
                      </ListItem>
                      <ListItem>
                        Enabled Figma plugins to generate more accurate code
                        automatically, positioning Carbon as an enabler of
                        intelligent, AI-assisted tooling
                      </ListItem>
                    </UnorderedList>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="IBM Acquisitions · Carbon Migration"
            intro={
              <p>
                Led the technical strategy for standardizing how IBM brings
                newly acquired products into the Carbon Design System ecosystem.
                Created a data-driven assessment framework and embedded
                collaboration model that transformed ad-hoc migrations into a
                predictable, scalable process. The approach balanced speed with
                quality, enabling teams to achieve visual consistency quickly
                while planning comprehensive component adoption over time.
              </p>
            }
            image={{
              src: "/images/migrate.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "#",
                label: "",
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: (
                  <p>
                    As Development Lead, helped create IBM's first systematic
                    approach to migrating acquired products onto Carbon Design
                    System. Collaborated with the team to build a repeatable
                    framework combining technical assessment, interactive effort
                    modeling, and embedded partnership that reduced migration
                    timelines by 40% while maintaining product velocity. The
                    program now serves as IBM's standard for acquisition
                    onboarding, with the sizing methodology adopted across 8+
                    product teams.
                  </p>
                ),
              },
              {
                heading: "Background",
                content: (
                  <>
                    <p>
                      <strong>The Challenge:</strong> IBM's acquisition strategy
                      accelerated, but each new product brought unique design
                      languages, tech stacks, and user expectations. Without a
                      systematic approach, migrations were inconsistent and
                      time-consuming, creating fragmented user experiences and
                      straining both acquisition teams and the Carbon team.
                    </p>
                    <p>
                      <strong>My Role:</strong> As Development Lead, I owned the
                      technical strategy and delivery methodology, working
                      directly with product teams, Carbon designers, and
                      engineering leadership to define and execute the program.
                    </p>
                  </>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      <strong>1. Technical Discovery & Assessment:</strong>{" "}
                      Working with the team to understand what made migrations
                      successful or challenging across different product
                      contexts.
                    </p>
                    <p>
                      <strong>Technical Discovery Process:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        <strong>Asset Audit:</strong> Worked with acquisition
                        teams to conduct full component inventories across their
                        Figma files and codebases
                      </ListItem>
                      <ListItem>
                        <strong>Accessibility Baseline:</strong> Collaborated to
                        establish comprehensive a11y audits covering keyboard
                        navigation, color contrast, and semantic markup
                      </ListItem>
                      <ListItem>
                        <strong>Parity Mapping:</strong> Mapped existing product
                        components to Carbon equivalents, identifying what could
                        translate directly and what needed adaptation
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>2. Interactive Sizing Model:</strong> The
                      breakthrough was making effort estimation collaborative
                      and transparent. I built an interactive model that:
                    </p>
                    <UnorderedList>
                      <ListItem>
                        <strong>Weighted complexity factors:</strong> Component
                        usage frequency, technical debt, accessibility gaps, and
                        design divergence
                      </ListItem>
                      <ListItem>
                        <strong>Factored team capacity:</strong> Available
                        developers, existing Carbon knowledge, and concurrent
                        feature work
                      </ListItem>
                      <ListItem>
                        <strong>Generated staged timelines:</strong> Prioritized
                        high-impact, low-risk changes first, with heavier
                        architectural shifts sequenced later
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>3. Embedded Partnership Strategy:</strong> Rather
                      than consulting from the sidelines, we embedded Carbon
                      experts directly with product teams through "away
                      missions":
                    </p>
                    <UnorderedList>
                      <ListItem>
                        <strong>Close collaboration</strong> between Carbon
                        developers and product engineers throughout the
                        migration
                      </ListItem>
                      <ListItem>
                        <strong>Design reviews</strong> with both teams present
                        to align on component decisions
                      </ListItem>
                      <ListItem>
                        <strong>Staged delivery</strong> where teams shipped
                        improvements in phases rather than waiting for complete
                        migration
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
                      <strong>Technical Complexity:</strong> Products varied
                      from React to Angular to vanilla JavaScript, each with
                      different state management and styling approaches. The
                      biggest challenge was preserving existing user workflows
                      while updating the underlying components.
                    </p>
                    <p>
                      <strong>Solution:</strong> Created a "styling-first"
                      approach for high-risk areas. Teams could achieve visual
                      consistency using Carbon tokens without immediately
                      replacing components, reducing regression risk while
                      buying time for proper component swaps.
                    </p>

                    <p>
                      <strong>Organizational Resistance:</strong> Many teams had
                      invested heavily in custom design systems and questioned
                      the value of migration. Some saw Carbon as additional
                      complexity that would slow their development.
                    </p>
                    <p>
                      <strong>Solution:</strong> Made the business case concrete
                      through data. The sizing model showed teams exactly where
                      they'd save time (maintaining fewer custom components)
                      versus where they'd invest more (learning Carbon
                      patterns). Early wins in accessibility and visual
                      consistency helped build confidence.
                    </p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>
                      <strong>Program Success:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Created a reusable migration framework now being applied
                        across IBM acquisitions
                      </ListItem>
                      <ListItem>
                        The sizing methodology and away mission model became
                        standard practice for Carbon team integrations
                      </ListItem>
                      <ListItem>
                        Established "styling-first" approach that other teams
                        adopted for risk mitigation
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Cloudability Results:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Completed initial visual migration in 6 weeks instead of
                        estimated several months
                      </ListItem>
                      <ListItem>
                        Achieved ~90% Carbon design audit readiness across micro
                        front ends
                      </ListItem>
                      <ListItem>
                        Generated approximately $200K in cost savings by
                        reducing internal team resource needs
                      </ListItem>
                      <ListItem>
                        Created Graphene theming system now being adopted across
                        other Apptio products
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Broader Impact:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Multiple acquisition teams successfully used the
                        framework and sizing model
                      </ListItem>
                      <ListItem>
                        Away mission model scaled beyond acquisitions to support
                        other Carbon integrations
                      </ListItem>
                      <ListItem>
                        Teams reported faster alignment with Carbon standards
                        without disrupting feature development
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>What Made It Work:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Clear documentation and component mapping process
                      </ListItem>
                      <ListItem>
                        Embedded collaboration model that didn't drain product
                        team resources
                      </ListItem>
                      <ListItem>
                        Practical staging approach that prioritized high-impact,
                        low-risk changes first
                      </ListItem>
                      <ListItem>
                        Interactive sizing tool that helped teams plan realistic
                        timelines
                      </ListItem>
                    </UnorderedList>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon for AI"
            intro={
              <p>
                Carbon for AI is an extension of the Carbon design system that
                gives AI instances a visually distinct identity through
                light-inspired effects like gradients, glows, and brightness.
                Built on Carbon's core principles, it uses visual styling to
                identify AI-generated content while providing transparency and
                explainability pathways. The system includes new color tokens,
                AI variants of existing components, and specialized components
                like the AI label to ensure consistent AI identification across
                IBM's product ecosystem.
              </p>
            }
            image={{
              src: "/images/ai.png",
              width: 1600,
              height: 920,
              alt: "",
            }}
            links={[
              {
                href: "https://carbondesignsystem.com/guidelines/carbon-for-ai/",
                label: "Guidelines",
                icon: <Wikis />,
              },
              {
                href: "https://github.com/carbon-design-system/carbon/tree/main/packages/themes",
                label: "GitHub",
                icon: <LogoGithub />,
              },
              {
                href: "https://react.carbondesignsystem.com/?path=/story/experimental-ai-label-ailabel--default",
                label: "Storybook",
                icon: <Notebook />,
              },
            ]}
            sections={[
              {
                heading: "Summary",
                content: (
                  <p>
                    Provided technical oversight and review for Carbon for AI, a
                    comprehensive extension to IBM's design system that uses
                    light-inspired visual effects to identify AI-generated
                    content. Managed the development process and provided
                    architectural guidance on how gradient systems and new color
                    tokens would integrate with existing Carbon infrastructure.
                    Ensured the implementation maintained design system
                    consistency and accessibility standards throughout the rapid
                    development cycle that delivered full component coverage in
                    just a few months.
                  </p>
                ),
              },
              {
                heading: "Background",
                content: (
                  <>
                    <p>
                      <strong>The Challenge:</strong> As AI became central to
                      IBM's product strategy, users needed clear ways to
                      identify AI-generated content across all IBM software.
                      Without visual consistency, AI instances appeared
                      differently across products, creating confusion and
                      reducing trust. IBM needed a systematic approach that
                      would work across hundreds of components while maintaining
                      accessibility and brand consistency.
                    </p>
                    <p>
                      <strong>The Opportunity:</strong> Create an extension to
                      Carbon that used "light as a metaphor to illuminate
                      AI-generated content" while building transparency and
                      explainability into the design system itself. This meant
                      developing new visual language that was distinct yet
                      harmonious with existing Carbon principles.
                    </p>
                    <p>
                      <strong>My Role:</strong> I served in a review and
                      management capacity, overseeing the technical
                      implementation process and providing guidance on
                      architecture decisions. My involvement focused on ensuring
                      the AI styling integrated properly with existing Carbon
                      infrastructure and met our accessibility and consistency
                      standards.
                    </p>
                  </>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      <strong>Design-Development Collaboration:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Dev partnered closely with design through early
                        prototyping phase to understand how gradient systems
                        would work across multiple component types and themes
                      </ListItem>
                      <ListItem>
                        Carbon devs built rapid prototypes to test visual
                        concepts in real component contexts, validating design
                        decisions against technical constraints
                      </ListItem>
                      <ListItem>
                        Established feedback loops between design exploration
                        and technical feasibility to ensure concepts could scale
                        across the entire component library
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Token Architecture & Visual System:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Developed new suite of AI color tokens that integrated
                        seamlessly with existing Carbon themes without requiring
                        separate theme packages
                      </ListItem>
                      <ListItem>
                        Implemented gradient and glow effects using CSS custom
                        properties to ensure consistent light-inspired styling
                        across components
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Component Implementation Strategy:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Built AI variants for core Carbon components using
                        mix-in approach, allowing components to toggle between
                        standard and AI styling without code duplication
                      </ListItem>
                      <ListItem>
                        Integrated AI label component as consistent indicator
                        across all AI-enhanced components, providing pathway to
                        explainability through popover system
                      </ListItem>
                      <ListItem>
                        Implemented revert functionality that allows users to
                        toggle between AI-generated and manually edited content
                        while maintaining state
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Accessibility & Standards:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Ensured all AI styling met Carbon's accessibility
                        standards through contrast testing and screen reader
                        validation
                      </ListItem>
                      <ListItem>
                        Limited light spread and glow effects to maintain
                        readability while preserving visual distinction
                      </ListItem>
                      <ListItem>
                        Built AI transparency principles directly into component
                        architecture, making ethical AI practices automatic
                        rather than optional
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
                      <strong>Visual Complexity vs. Performance:</strong>{" "}
                      Implementing gradients, glows, and light effects across
                      dozens of components while maintaining fast render
                      performance required careful CSS optimization. Had to
                      balance visual impact with technical constraints,
                      especially for complex components like data tables with
                      hundreds of cells.
                    </p>

                    <p>
                      <strong>Cross-Component Consistency:</strong> Each
                      component type presented unique challenges for applying AI
                      styling - from form inputs to modals to data tables.
                      Ensuring the light-inspired effects felt cohesive across
                      such different interaction patterns required extensive
                      iteration and testing.
                    </p>

                    <p>
                      <strong>Accessibility with New Visual Language:</strong>{" "}
                      Creating visually striking effects that remained
                      accessible was challenging. The gradient and glow effects
                      needed to enhance rather than interfere with contrast
                      ratios, keyboard navigation, and screen reader
                      accessibility.
                    </p>

                    <p>
                      <strong>Theme Integration:</strong> AI styling needed to
                      work across Carbon's light, dark, and high-contrast themes
                      without breaking existing implementations. This required
                      careful token architecture that extended rather than
                      replaced existing color systems.
                    </p>

                    <p>
                      <strong>Rapid Timeline with Quality Standards:</strong>{" "}
                      Delivering full component coverage in just a few months
                      while maintaining Carbon's quality and accessibility
                      standards required efficient prototyping workflows and
                      close design-development coordination throughout the
                      process.
                    </p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>
                      <strong>Comprehensive Component Coverage:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Delivered AI variants for all core Carbon components
                        including forms, data tables, modals, and navigation
                        elements in just a few months
                      </ListItem>
                      <ListItem>
                        Created consistent AI identification system that works
                        across React and Web Components libraries with identical
                        visual and behavioral patterns
                      </ListItem>
                      <ListItem>
                        Built reusable architecture that allows teams to easily
                        add AI styling to custom components using established
                        token system
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Design System Integration:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Successfully integrated AI styling into existing Carbon
                        themes without breaking changes, allowing teams to adopt
                        AI components incrementally
                      </ListItem>
                      <ListItem>
                        Established design-to-code workflow where designers can
                        toggle AI variants in Figma and developers can implement
                        using the same variable system
                      </ListItem>
                      <ListItem>
                        Created sustainable token architecture that maintains
                        consistency as new AI components and patterns are added
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Accessibility:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        All AI components meet Carbon's accessibility standards
                        with tested color contrast and screen reader
                        compatibility
                      </ListItem>
                      <ListItem>
                        Built AI transparency and explainability directly into
                        component architecture through integrated AI label and
                        popover system
                      </ListItem>
                      <ListItem>
                        Established visual language that clearly distinguishes
                        AI content while maintaining usability and aesthetic
                        harmony with base Carbon components
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Technical Foundation:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Created reusable pattern for extending design systems
                        with specialized visual languages while maintaining
                        consistency and accessibility
                      </ListItem>
                      <ListItem>
                        Demonstrated rapid prototyping workflow that bridges
                        design exploration with technical implementation at
                        enterprise scale
                      </ListItem>
                      <ListItem>
                        Positioned IBM as leader in ethical AI presentation
                        through systematic approach to transparency and
                        explainability in user interfaces
                      </ListItem>
                    </UnorderedList>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon Gatsby Theme"
            intro={
              <p>
                Led development of gatsby-theme-carbon during IBM’s migration to
                Carbon v10 and the new IBM Design Language. Instead of building
                separate sites, I partnered with design to deliver a unified
                Gatsby theme that now powers an ecosystem of both internal and
                external IBM websites.
              </p>
            }
            image={{
              src: "/images/gatsby-theme.png",
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
                content: (
                  <p>
                    As development lead, created gatsby-theme-carbon to unify
                    IBM's design ecosystem under a single, reusable Gatsby
                    theme. Built during the Carbon v10 and IBM Design Language
                    migration, the theme now powers hundreds of internal and
                    external repositories and enables teams to launch IBM Design
                    Language-compliant sites in hours rather than months.
                    Partnered closely with designers to ensure the theme
                    properly expressed design principles while creating
                    sustainable architecture for content authors and developers.
                  </p>
                ),
              },
              {
                heading: "Background",
                content: (
                  <>
                    <p>
                      <strong>The Challenge:</strong> With the launch of Carbon
                      v10 and the new IBM Design Language, IBM needed to rebuild
                      both the Carbon Design System website and the IBM Design
                      Language website. Building these separately would have
                      duplicated effort and risked inconsistency across IBM's
                      design presence. Meanwhile, teams across IBM struggled to
                      create sites that properly reflected the IBM Design
                      Language without dedicated development resources.
                    </p>
                    <p>
                      <strong>The Opportunity:</strong> Gatsby's theme system
                      provided a way to encapsulate all configuration and
                      implementation details into a reusable package. This meant
                      we could build once and enable dozens of teams to launch
                      consistent, high-quality sites with minimal technical
                      overhead.
                    </p>
                    <p>
                      <strong>My Role:</strong> As development lead, I owned the
                      technical architecture and implementation strategy while
                      partnering closely with Carbon designers to ensure the
                      theme properly expressed the IBM Design Language across
                      different use cases.
                    </p>
                  </>
                ),
              },
              {
                heading: "Approach",
                content: (
                  <>
                    <p>
                      <strong>Theme Architecture & Gatsby Integration:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Built on Gatsby's theme composition system, allowing
                        teams to shadow (override) components while maintaining
                        core functionality
                      </ListItem>
                      <ListItem>
                        Implemented MDX-first content strategy, enabling content
                        authors to write in Markdown with embedded React
                        components
                      </ListItem>
                      <ListItem>
                        Created flexible component shadowing system that
                        balanced consistency with customization needs
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Design System Integration:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Integrated Carbon React components as the foundation
                        while building theme-specific patterns for common
                        website needs
                      </ListItem>
                      <ListItem>
                        Ensured automatic adherence to IBM Design Language
                        principles through built-in typography, spacing, and
                        color systems
                      </ListItem>
                      <ListItem>
                        Created documentation site architecture that worked for
                        both technical and brand-focused content
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Content Author Experience:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Designed MDX-based content system that allowed
                        non-technical team members to create rich, interactive
                        pages
                      </ListItem>
                      <ListItem>
                        Built sidebar navigation system that is easily
                        configurable for designers, developers or content
                        editors
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Scalability & Maintenance:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Established versioning strategy that allowed theme
                        updates to propagate across all dependent sites
                      </ListItem>
                      <ListItem>
                        Built theme with plugin architecture to support
                        different site needs (documentation, marketing, events)
                      </ListItem>
                      <ListItem>
                        Created starter templates and comprehensive
                        documentation to reduce onboarding friction
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
                      <strong>Technical Complexity Across Team Skills:</strong>{" "}
                      The theme needed to serve both highly technical developers
                      building documentation sites and content creators with
                      minimal coding experience. Balancing powerful
                      customization capabilities with simple content authoring
                      required careful API design and extensive testing with
                      both user types.
                    </p>

                    <p>
                      <strong>IBM Design Language Translation:</strong>{" "}
                      Converting IBM Design Language principles from print and
                      brand guidelines into flexible web patterns was
                      challenging. Each component needed to work across
                      different content types while maintaining consistent brand
                      expression. This required close collaboration with
                      designers to validate that the theme truly captured the
                      intended design language.
                    </p>

                    <p>
                      <strong>Cross-Team Coordination:</strong> As the theme
                      gained adoption, managing feedback and feature requests
                      from multiple teams required careful prioritization. Each
                      team had specific needs, but changes needed to benefit the
                      broader ecosystem without breaking existing
                      implementations.
                    </p>
                  </>
                ),
              },
              {
                heading: "Outcomes",
                content: (
                  <>
                    <p>
                      <strong>Adoption & Scale:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Powers hundreds of internal and external repositories
                        according to GitHub dependency tracking
                      </ListItem>
                      <ListItem>
                        Serves as foundation for major IBM design properties
                        including IBM Design, Carbon Design System, IBM Design
                        Language, and IBM Design Research
                      </ListItem>
                      <ListItem>
                        Receives ~1,127 weekly npm downloads demonstrating
                        active community usage
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Developer & Content Author Efficiency:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Teams report migrating entire sites to the theme "in a
                        matter of hours" versus months for custom development
                      </ListItem>
                      <ListItem>
                        Content creators can launch new sites without dedicated
                        development resources
                      </ListItem>
                      <ListItem>
                        Testimonials highlight ability to focus on content
                        rather than technical implementation
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Design Consistency:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Automatic compliance with IBM Design Language across all
                        implementing sites
                      </ListItem>
                      <ListItem>
                        Shared component library ensures visual solidarity
                        across IBM's design ecosystem
                      </ListItem>
                      <ListItem>
                        Theme-managed configuration eliminates common
                        implementation inconsistencies
                      </ListItem>
                    </UnorderedList>

                    <p>
                      <strong>Technical Foundation:</strong>
                    </p>
                    <UnorderedList>
                      <ListItem>
                        Created reusable model for design system-driven website
                        themes
                      </ListItem>
                      <ListItem>
                        Established patterns for MDX-based content management
                        that other teams have adopted
                      </ListItem>
                      <ListItem>
                        Built sustainable update mechanism where core
                        improvements benefit entire ecosystem automatically
                      </ListItem>
                    </UnorderedList>
                  </>
                ),
              },
            ]}
          />

          <WorkItem
            title="Carbon Design System"
            intro={
              <p>
                As one of the development leads and a core maintainer of IBM's
                open-source design system, I help lead technical strategy and
                community engagement for one of the industry's most widely
                adopted design systems. Carbon serves users across IBM's product
                ecosystem and the broader open-source community through React,
                Web Components, and design tools. My role spans hands-on
                development, team management, release coordination, and
                fostering a thriving contributor community.
              </p>
            }
            image={{
              src: "/images/carbon.png",
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
                href: "https://carbondesignsystem.com/",
                label: "Website",
                icon: <Wikis />,
              },
              {
                href: "https://www.npmjs.com/package/@carbon/react",
                label: "npm",
                icon: <LogoNpm />,
              },
            ]}
            sections={[
              {
                heading: "Role & Scope",
                content: (
                  <>
                    <p>
                      <strong>Development Lead & Maintainer:</strong> Lead
                      technical strategy, architecture decisions, and day-to-day
                      development for Carbon's React library, Web Components,
                      and supporting tooling. Manage a team of developers while
                      contributing directly to core functionality, new
                      components, and accessibility improvements.
                    </p>
                    <p>
                      <strong>Community Leadership:</strong> Run bi-weekly
                      office hours with the internal IBM community, monitor
                      Slack channels for support, and facilitate collaboration
                      between IBM teams and external contributors. Foster an
                      inclusive environment that encourages contributions from
                      developers across skill levels.
                    </p>
                    <p>
                      <strong>Release Management:</strong> Coordinate bi-weekly
                      releases across multiple packages, ensuring stability
                      while delivering new features and improvements. Manage
                      versioning strategy, backward compatibility, and migration
                      paths for breaking changes.
                    </p>
                  </>
                ),
              },
              {
                heading: "Current Initiatives",
                content: (
                  <>
                    <p>
                      <strong>React & Web Components Parity:</strong>
                      Leading efforts to ensure feature parity between Carbon's
                      React and Web Components libraries, enabling consistent
                      experiences regardless of framework choice. This includes
                      architectural planning, API design, and coordination
                      between development teams.
                    </p>
                    <p>
                      <strong>Accessibility Excellence:</strong> Driving
                      comprehensive accessibility improvements across the
                      component library, including automated testing expansion,
                      ARIA implementation, and keyboard navigation enhancements.
                      Working to establish Carbon as an accessibility leader in
                      the design system space.
                    </p>
                    <p>
                      <strong>Testing & Quality:</strong> Expanding test
                      coverage and improving testing infrastructure to ensure
                      reliability at scale. This includes unit tests,
                      integration tests, visual regression testing, and
                      accessibility validation across the component library.
                    </p>
                    <p>
                      <strong>Website & Documentation:</strong>
                      Managing the Carbon website as part of sprint work,
                      ensuring documentation stays current with component
                      changes and provides clear guidance for both developers
                      and designers.
                    </p>
                  </>
                ),
              },
              {
                heading: "Scale & Impact",
                content: (
                  <>
                    <p>
                      <strong>Open Source Reach:</strong> Carbon's GitHub
                      organization includes 116 repositories with active
                      community contribution. The main repository receives
                      regular contributions from both IBM teams and external
                      developers, fostering innovation and shared ownership.
                    </p>
                    <p>
                      <strong>Enterprise Adoption:</strong> Carbon serves as the
                      foundation for IBM's entire product portfolio, ensuring
                      consistent user experiences across cloud, AI, and
                      enterprise software offerings. The system scales to
                      support thousands of developers and millions of end users.
                    </p>
                    <p>
                      <strong>Community Engagement:</strong> Regular office
                      hours sessions connect directly with developers using
                      Carbon, providing real-time support and gathering feedback
                      that drives roadmap decisions. Active Slack community
                      enables ongoing collaboration and knowledge sharing.
                    </p>
                    <p>
                      <strong>Technical Leadership:</strong> Balance hands-on
                      development with strategic planning, ensuring Carbon
                      evolves to meet changing technology needs while
                      maintaining stability for existing implementations. Lead
                      architectural decisions that impact the entire IBM
                      ecosystem.
                    </p>
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
