import data from '../../services/data.json' assert { type: 'json' }
import ProjectCard from '../ui/project-card'
import { AllIconsStack } from '../ui/icons'
import MainContentTheme from '../ui/main-content-theme'

const MainContent = () => {
  return (
    <main className='main'>
      <MainContentTheme
        title='Projects'
        class_A='main__projects'
        children={
          <>
            {data.projects.map((e) => (
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
    </main>
  )
}

export default MainContent
