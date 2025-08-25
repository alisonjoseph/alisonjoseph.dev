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
        <div className={styles.items}>
          <WorkItem
            title="UI Shell Improvements in Carbon Labs"
            intro="The Carbon UI Shell was expanded and enhanced in Carbon Labs to create a consistent, unified experience across IBM Software. Building on the existing shell, the work added new React components where gaps existed and aligned diverse business needs into shared patterns."
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
            intro="Expanded accessibility testing across Carbon React and introduced a dashboard that gives teams clear, real-time visibility into component accessibility status. This work improved confidence in coverage and made accessibility progress easy to track across the library."
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
                  Figma's Dev Mode. This integration allows developers to view
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
            intro="Led the technical strategy for standardizing how IBM brings newly acquired products into the Carbon Design System ecosystem. Created a data-driven assessment framework and embedded collaboration model that transformed ad-hoc migrations into a predictable, scalable process. The approach balanced speed with quality, enabling teams to achieve visual consistency quickly while planning comprehensive component adoption over time."
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
            intro="summary here"
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
            intro="summary here"
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
            title="Carbon Gatsby Theme"
            intro="summary here"
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
