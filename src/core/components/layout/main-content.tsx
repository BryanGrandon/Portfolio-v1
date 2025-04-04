import MainContentTheme from '../ui/main-content-theme'
import About from './about'
import Projects from './projects'
import Stack from './stack'

const MainContent = () => {
  return (
    <main className='main'>
      <Projects />
      <Stack />
      <About />

      <MainContentTheme
        title='Contact'
        class_A='contact'
        children={
          <section className='contact__container'>
            <p className='contact__text'>If you want to get in touch, feel free to reach out!</p>
            <a href={`mailto:bgrandon.corea@gmail.com`} className='contact__link'>
              s
            </a>
          </section>
        }
      />
    </main>
  )
}

export default MainContent
