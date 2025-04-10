import { IArrowUp } from '../ui/icons'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import Stack from './stack'

const MainContent = () => {
  const handlerClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <main className='main'>
      <Projects />
      <button className='main__btn-top' onClick={handlerClickTop}>
        <IArrowUp className='main__btn-top--icon' />
      </button>
      <Stack />
      <About />
      <Contact />
    </main>
  )
}

export default MainContent
