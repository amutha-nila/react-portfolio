import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download,
  BrainCircuit, Code2, Cloud, Database, Bot, ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = [
  ["Python", "Programming & DSA", Code2],
  ["AI / ML", "Machine Learning & Deep Learning", BrainCircuit],
  ["LLMs & RAG", "Transformers, RAG & AI Agents", Bot],
  ["Backend & APIs", "REST APIs & Server-side Development", Database],
  ["Cloud", "AWS & Cloud Fundamentals", Cloud],
  ["Full Stack", "Frontend, Backend & Databases", Code2],
];

const projects = [
  {
    number: "01",
    title: "Hospital Black Box",
    tag: "AI • Healthcare • Analytics",
    description:
      "An operational intelligence concept that reconstructs hospital workflows from event timestamps to identify hidden bottlenecks and delays before adverse outcomes.",
    tech: ["AI/ML", "Workflow Analytics", "RAG", "Agents"],
  },
  {
    number: "02",
    title: "CARE-X Emergency",
    tag: "Agentic AI • IoT • Healthcare",
    description:
      "An emergency-care coordination concept designed to connect ambulance and hospital workflows, creating a continuous emergency case thread for faster operational readiness.",
    tech: ["Agentic AI", "IoT", "APIs", "Real-time Data"],
  },
  {
    number: "03",
    title: "DSA & Coding Practice",
    tag: "Python • Algorithms • Problem Solving",
    description:
      "A structured journey through arrays, strings, two pointers, sliding window, prefix sums, binary search, sorting and other interview-focused patterns.",
    tech: ["Python", "LeetCode", "DSA"],
  },
];

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <a className="logo" href="#home">N<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={16}/></a>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">AI & ML • SOFTWARE • RESEARCH</p>
            <h1>Building ideas<br/><span>that matter.</span></h1>
            <p className="hero-text">
              I'm <strong>Nila</strong>, an AI & ML student exploring the intersection
              of intelligent systems, software engineering and real-world problem solving.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
            <div className="mini-meta">
              <span><MapPin size={15}/> Tamil Nadu, India</span>
              <span>Currently learning: Python + DSA</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="grid-glow"></div>
            <div className="code-card">
              <div className="dots"><i></i><i></i><i></i></div>
              <pre>{`const future = {
  focus: "AI + Software",
  learn: ["DSA", "ML", "Cloud"],
  build: "real impact"
};`}</pre>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <h2>Curious by nature.<br/><em>Builder by choice.</em></h2>
            <div>
              <p>
                I'm pursuing AI & Machine Learning and building a foundation across
                software engineering, algorithms, cloud and modern AI systems.
              </p>
              <p>
                My interests include LLMs, Transformers, RAG, AI agents, backend
                systems, APIs, real-time applications and cloud technologies. I
                enjoy turning difficult real-world problems into systems that can
                be understood, tested and improved.
              </p>
              <p className="muted">Open to internships, research opportunities and challenging software/AI projects.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 / TOOLKIT</div>
          <div className="section-heading">
            <h2>Things I'm<br/><em>working with.</em></h2>
            <p>Growing from fundamentals to production-level systems.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, desc, Icon]) => (
              <div className="skill-card" key={name}>
                <Icon size={25}/>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-heading">
            <h2>Problems first.<br/><em>Technology second.</em></h2>
            <p>Projects focused on meaningful, technically ambitious problems.</p>
          </div>
          <div className="project-list">
            {projects.map((p) => (
              <article className="project-card" key={p.number}>
                <span className="project-number">{p.number}</span>
                <div className="project-main">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                </div>
                <div className="project-arrow"><ArrowUpRight size={28}/></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education">
          <div className="section-label">04 / JOURNEY</div>
          <div className="timeline">
            <div className="timeline-item">
              <span>01</span>
              <div>
                <p className="eyebrow">CURRENT</p>
                <h3>AI & Machine Learning</h3>
                <p>Building foundations in programming, DSA, ML, deep learning and AI systems.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>02</span>
              <div>
                <p className="eyebrow">EXPLORING</p>
                <h3>Modern AI Engineering</h3>
                <p>LLMs, Transformers, RAG, vector databases, AI agents and intelligent applications.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>03</span>
              <div>
                <p className="eyebrow">BUILDING</p>
                <h3>Cloud & Software Engineering</h3>
                <p>APIs, backend systems, databases, AWS, deployment and full-stack development.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-box">
            <p className="eyebrow">05 / CONTACT</p>
            <h2>Let's build something<br/><em>worth talking about.</em></h2>
            <p>Interested in collaborating, discussing a project, or sharing an opportunity?</p>
            <a className="button primary" href="mailto:YOUR_EMAIL@example.com">Say hello <Mail size={17}/></a>
            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={19}/> GitHub <ExternalLink size={13}/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn <ExternalLink size={13}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Nila</span>
        <span>Designed & built with React.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);