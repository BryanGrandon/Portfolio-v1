import data from '../../services/data.json' assert { type: 'json' }
import ProjectCard from '../ui/project-card'
import { AllIconsStack } from '../ui/icons'
import MainContentTheme from '../ui/main-content-theme'

const MainContent = () => {
  const projects = data.projects
  const about = data.about
  const { image, name } = data.staff

  return (
    <main className='main'>
      <MainContentTheme
        title='Projects'
        class_A='main__projects'
        children={
          <>
            {projects.map((e) => (
              <ProjectCard
                key={e.id}
                url={e.url}
                img={e.img}
                title={e.title}
                description={e.description}
                ariaLabel={e.ariaLabel}
              />
            ))}
          </>
        }
      />

      <MainContentTheme title='Stacks' class_A='list-stack' children={<AllIconsStack className='list-stack__icons' />} />

      <MainContentTheme
        title='About'
        class_A='about'
        children={
          <>
            <img src={image.src} alt={image.alt} className='about__image' />
            <section className='about__container'>
              <header className='about__header'>
                <h3 className='about__name'>{name}</h3>
                <p className='about__subtext'>A bit About Me</p>
              </header>
              <p className='about__text'>{about.text}</p>
            </section>
          </>
        }
      />
    </main>
  )
}

export default MainContent
