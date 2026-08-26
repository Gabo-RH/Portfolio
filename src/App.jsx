import { useState } from 'react'
import './App.css'


const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    title: 'Natlab',
    image: 'project1.png',
    description:
      'This project display a bit of my creativity once you enter the website you will see a dvd like animation',
    tags: ['Frontend', 'React', 'Motion', 'Tailwind' ],
    link: 'https://studio-maid-6.vercel.app',
  },
]

const skills = [
  'Responsive web design',
  'HTML, CSS, JavaScript, React',
  'Backend development',
  'Clean, readable code',
  'Continuous learning mindset',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <div className="portfolio-app">
      <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-shell">
          <a href="#home" className="brand" aria-label="Go to home section">
            Gabriel<span>.</span>
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <aside className="social-icons" aria-label="Social media links">
        <a href="https://github.com/Gabo-RH" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/gerardo-gabriel-rodriguez-herrera-2a49b5242" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="mailto:gerardo.gabriel.rodriguez.herrera@gmail.com" aria-label="Email">
          <i className="fa-solid fa-envelope" />
        </a>
      </aside>

      <main id="home" className="page-shell">
        <section className="hero section-reveal">
          <div className="hero-copy">
            <p className="eyebrow">Software Development Student</p>
            <h1>
              Building thoughtful <span>digital experiences</span> with code.
            </h1>
            <p className="lead">
              I’m Gabriel, a software development student focused on backend development. I’m passionate about creating efficient and scalable solutions that make a positive impact.
            </p>

           
            <ul className="stats" aria-label="Portfolio quick summary">
              <li>
                <strong>2+</strong>
                <span>Years learning</span>
              </li>
              <li>
                <strong>3</strong>
                <span>Languages</span>
              </li>
              <li>
                <strong>1</strong>
                <span>Portfolio</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img src="me.png" alt="Gabriel Rodriguez Herrera portrait" />
            </div>
            <div className="mini-badge">
              <span className="status-dot" />
              Available for stage
            </div>
          </div>
        </section>

        <section className="intro-panel section-reveal">
          <p>
            My focus is on backend development I want to learn even more about databases and how to work with them, but I can also do some frontend work. I’m currently learning React, Next.js and framer motionto expand my skill set and build more dynamic web applications.
          </p>
        </section>

        <section id="projects" className="projects-section section-reveal">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noreferrer' : undefined}>
                  <img src={project.image} alt={`${project.title} preview`} />
                </a>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section section-reveal">
          <div className="section-heading">
            <p className="eyebrow">Get to know me</p>
            <h2>About me</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <p>My name is Gerardo Gabriel Rodriguez Herrera, and I was born in Venezuela.</p>
              <p>I enjoy listening to music, reading, and playing video games every now and then.</p>
              <p>I speak Spanish, English, and Dutch, and I’m always working to improve my technical and communication skills.</p>
              <p className="thank-you">My goal is to become a software deverloper and build meaningful / exciting projects that make a difference.</p>
            </div>

            <div className="skills-card">
              <h3>What I bring</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-strip section-reveal">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>Looking for a motivated developer?</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
