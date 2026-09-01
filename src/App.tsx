
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  X,
  Zap,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

const skills: Array<[string, string, LucideIcon]> = [
  ["Playwright", "Python / Pytest", Code2],
  ["Selenium", "Java", Layers3],
  ["API Testing", "Postman / Newman", Globe2],
  ["Performance", "JMeter", BarChart3],
  ["CI/CD", "Jenkins / GitHub", Zap],
  ["Mobile", "Appium / Android", Smartphone],
  ["Test Management", "Jira / Asana / Zephyr", ShieldCheck],
  ["AI Testing", "ISTQB CT-GenAI", Bot],
];

const projects = [
  {
    number: "01",
    title: "Playwright + Pytest Automation Framework",
    tag: "Automation",
    description:
      "A maintainable UI automation architecture designed around reusable fixtures, Page Object Model, reliable locators, test data, API mocking and CI execution.",
    stack: ["Python", "Playwright", "Pytest", "GitHub", "Jenkins"],
    points: [
      "Reusable page objects and fixtures",
      "API response mocking for difficult authentication flows",
      "Regression-ready test organization",
      "Designed for CI/CD execution and reporting",
    ],
  },
  {
    number: "02",
    title: "API Testing & Validation",
    tag: "API",
    description:
      "API-focused testing covering authentication, positive and negative scenarios, response validation, status codes and automated execution.",
    stack: ["Postman", "Newman", "REST API", "JSON"],
    points: [
      "Functional and negative API scenarios",
      "Response and schema validation",
      "Reusable environments and test data",
      "Command-line execution for CI pipelines",
    ],
  },
  {
    number: "03",
    title: "Performance Testing with JMeter",
    tag: "Performance",
    description:
      "Performance testing approach for web services and pages, including load modelling, response-time analysis and identifying bottlenecks.",
    stack: ["JMeter", "CLI", "Load Testing"],
    points: [
      "Load testing scenarios up to 1,000 users",
      "Response-time and throughput analysis",
      "CLI execution for repeatable runs",
      "Results used to identify performance risks",
    ],
  },
  {
    number: "04",
    title: "Government Digital Services QA",
    tag: "Web / Mobile",
    description:
      "End-to-end quality assurance for digital government services, including UI flows, service status, payments, attachments, regression and defect lifecycle.",
    stack: ["Web Testing", "Mobile", "API", "Jira / Asana"],
    points: [
      "End-to-end service journey validation",
      "Functional, regression and integration testing",
      "Detailed defect reporting and prioritization",
      "Cross-platform validation",
    ],
  },
];

const journey = [
  {
    period: "2024 — 2026",
    title: "SQA Engineer — Government Digital Services",
    description:
      "Quality assurance for Dubai Police digital services, combining manual testing, automation, API validation, performance testing and defect management.",
  },
  {
    period: "2022 — 2024",
    title: "QA Engineer — Fintech & Banking",
    description:
      "Testing experience across banking and fintech systems, including electronic banking services, integrations and customer-facing workflows.",
  },
  {
    period: "Earlier Experience",
    title: "Software QA / Testing",
    description:
      "Progressive experience across functional, regression, integration and automation testing with a focus on reliable, risk-based delivery.",
  },
];

const automationCode = `from playwright.sync_api import Page

class LoginPage:
    def __init__(self, page: Page):
        self.page = page
        self.username = page.get_by_label("Username")
        self.password = page.get_by_label("Password")
        self.login = page.get_by_role("button", name="Login")

    def login_as(self, username: str, password: str):
        self.username.fill(username)
        self.password.fill(password)
        self.login.click()

def test_login(page: Page):
    login = LoginPage(page)
    login.login_as("test.user", "secure-password")
    page.get_by_text("Dashboard").wait_for()`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="topline" />

      {/* NAVIGATION */}
      <header className="nav">
        <button
          className="brand"
          onClick={() => go("home")}
          aria-label="Go home"
        >
          <span className="brand-mark">AA</span>
          <span>Abobaker Ali</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <button key={item} onClick={() => go(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              SOFTWARE QUALITY ASSURANCE ENGINEER
            </div>

            <h1>
              I make software
              <br />
              <em>hard to break.</em>
            </h1>

            <p className="hero-text">
              QA engineer with almost 6 years of experience across web, mobile,
              API, performance and test automation. I turn requirements into
              reliable test coverage and repeatable engineering workflows.
            </p>

            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>
                Explore my work
                <ArrowRight size={17} />
              </button>

              <button className="secondary" onClick={() => go("contact")}>
                Let's connect
              </button>
            </div>

            <div className="quick-stats">
              <div>
                <strong>~6</strong>
                <span>Years QA</span>
              </div>

              <div>
                <strong>4+</strong>
                <span>Testing domains</span>
              </div>

              <div>
                <strong>1K</strong>
                <span>User load tests</span>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="terminal-card">
              <div className="terminal-head">
                <span>qa_pipeline.yml</span>
                <span>● ● ●</span>
              </div>

              <div className="terminal-body">
                <p>
                  <span className="code-muted">01</span>{" "}
                  <b>test:</b> regression
                </p>

                <p>
                  <span className="code-muted">02</span>{" "}
                  <b>framework:</b> playwright
                </p>

                <p>
                  <span className="code-muted">03</span>{" "}
                  <b>language:</b> python
                </p>

                <p>
                  <span className="code-muted">04</span>{" "}
                  <b>api:</b> postman
                </p>

                <p>
                  <span className="code-muted">05</span>{" "}
                  <b>performance:</b> jmeter
                </p>

                <p>
                  <span className="code-muted">06</span>{" "}
                  <b>ci:</b> jenkins
                </p>

                <p className="pass">
                  <span className="code-muted">07</span> ✓ 184 tests passed
                </p>
              </div>
            </div>

            <div className="floating-check">
              <CheckCircle2 size={24} />

              <span>
                Quality gate
                <br />
                <b>Passed</b>
              </span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-label">01 / ABOUT</div>

          <div className="two-col">
            <div>
              <h2>
                Quality is more than
                <br />
                <span>finding bugs.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I am Abobaker Ali, a Software Quality Assurance Engineer
                focused on building confidence in software before it reaches
                users.
              </p>

              <p>
                My experience combines hands-on functional testing with
                automation, API testing, performance engineering and CI/CD. I
                enjoy turning repetitive checks into maintainable automation
                and making QA measurable, scalable and easier for engineering
                teams to trust.
              </p>

              <div className="quote">
                <span>“</span>

                <p>
                  Test smarter. Automate what matters. Ship with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <div className="section-label">02 / TOOLBOX</div>

          <div className="section-heading">
            <h2>
              My testing <span>stack.</span>
            </h2>

            <p>A practical toolkit for modern quality engineering.</p>
          </div>

          <div className="skills-grid">
            {skills.map(([title, detail, Icon]) => (
              <div className="skill-card" key={title}>
                <Icon size={22} />

                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>

          <div className="section-heading">
            <h2>
              Proof, not just <span>promises.</span>
            </h2>

            <p>
              Representative QA work. Confidential employer data is
              intentionally excluded.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <div className="project-top">
                    <span className="pill">{project.tag}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>

                <button
                  className="project-open"
                  onClick={() => setActiveProject(index)}
                  aria-label={`Open ${project.title}`}
                >
                  <ChevronRight size={22} />
                </button>
              </article>
            ))}
          </div>

          {/* AUTOMATION SHOWCASE */}
          <div className="automation-showcase">
            <div>
              <div className="mini-label">AUTOMATION APPROACH</div>

              <h3>
                Readable tests.
                <br />
                <span>Reusable design.</span>
              </h3>

              <p>
                I prefer automation that another engineer can understand and
                extend: clear page objects, stable locators, reusable fixtures
                and tests that express business intent rather than
                implementation details.
              </p>

              <div className="principles">
                {[
                  "Page Object Model",
                  "Stable locators",
                  "Reusable fixtures",
                  "CI-ready tests",
                ].map((x) => (
                  <span key={x}>
                    <CheckCircle2 size={15} />
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="code-window">
              <div className="code-head">
                <span>test_login.py</span>
                <PlayCircle size={15} />
              </div>

              <pre>
                <code>{automationCode}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience section" id="experience">
          <div className="section-label">04 / EXPERIENCE</div>

          <div className="two-col experience-layout">
            <div>
              <h2>
                From test cases
                <br />
                to <span>quality engineering.</span>
              </h2>

              <p className="muted">
                A career built around understanding risk, designing coverage
                and improving how software gets validated.
              </p>
            </div>

            <div className="timeline">
              {journey.map((item, i) => (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-dot">{i + 1}</div>

                  <div>
                    <span>{item.period}</span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="credentials section">
          <div className="credential">
            <Award size={28} />

            <div>
              <span>CERTIFICATION</span>

              <h3>
                ISTQB Certified Tester — Foundation Level
              </h3>
            </div>
          </div>

          <div className="credential">
            <Bot size={28} />

            <div>
              <span>CERTIFICATION</span>

              <h3>
                ISTQB Certified Tester — AI Testing / GenAI
              </h3>
            </div>
          </div>

          <div className="credential">
            <ShieldCheck size={28} />

            <div>
              <span>EDUCATION</span>

              <h3>
                B.Sc. Computer Science — University of Khartoum
              </h3>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="contact-card">
            <div className="section-label">05 / CONTACT</div>

            <h2>
              Let's build better
              <br />
              <em>software.</em>
            </h2>

            <p>
              Open to QA, SDET and test automation opportunities. If you're
              looking for someone who combines hands-on testing with
              engineering thinking, let's talk.
            </p>

            <div className="contact-actions">
              <a
                className="primary"
                href="mailto:abobaker.mohammedb.ali@gmail.com"
              >
                <Mail size={17} />
                Email me
              </a>

              <a
                className="secondary"
                href="https://www.linkedin.com/in/abobaker-ali-1857ab105/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a
                className="secondary"
                href="https://github.com/abobakermohammedbali-sudo"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>
            </div>

            <div className="contact-note">
              Replace the placeholder email, LinkedIn and GitHub links with
              your real profiles.
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <span>© {new Date().getFullYear()} Abobaker Ali</span>

        <span>Software Quality Assurance Engineer</span>
      </footer>

      {/* PROJECT MODAL */}
      {activeProject !== null && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            <span className="pill">
              {projects[activeProject].tag}
            </span>

            <h2>{projects[activeProject].title}</h2>

            <p>{projects[activeProject].description}</p>

            <ul>
              {projects[activeProject].points.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={16} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="tags">
              {projects[activeProject].stack.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

