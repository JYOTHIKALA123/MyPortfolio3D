import { sections } from './data/siteData'
import useActiveSection from './hooks/useActiveSection'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ResumeHelpDialog from './components/ResumeHelpDialog'
import Skills from './components/Skills'
import Toast from './components/Toast'

const ids = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(ids)
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar active={active} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toast />
      <ResumeHelpDialog />
    </>
  )
}
