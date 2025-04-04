import About from './about'
import Contact from './contact'
import Projects from './projects'
import Stack from './stack'

const MainContent = () => {
  return (
    <main className='main'>
      <Projects />
      <Stack />
      <About />
      <Contact />
    </main>
  )
}

export default MainContent
