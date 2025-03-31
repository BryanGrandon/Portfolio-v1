import data from '../../services/data.json' assert { type: 'json' }
import ProjectCard from '../ui/project-card'
import { AllIconsStack } from '../ui/icons'
import MainContentTheme from '../ui/main-content-theme'

const MainContent = () => {
  const projects = data.projects
  const about = data.about
  const { image } = data.staff

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
        class_A='main__about'
        children={
          <>
            <img src={image.src} alt={image.alt} className='main__about__image' />
            <section>
              <p className='main__about__text'>{about.text}</p>
            </section>
          </>
        }
      />
    </main>
  )
}

export default MainContent
