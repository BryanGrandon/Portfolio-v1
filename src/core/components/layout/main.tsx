import data from '../../services/data.json' assert { type: 'json' }
import ProjectCard from '../ui/project-card'
import Title from '../ui/title'
import { AllIconsStack } from '../ui/icons'

const Main = () => {
  return (
    <main className='main'>
      <article id='projects'>
        <Title text='Projects' />
        <article className='projects'>
          {data.projects.map((e) => (
            <ProjectCard key={e.id} url={e.url} img={e.img} title={e.title} description={e.description} ariaLabel={e.ariaLabel} />
          ))}
        </article>
      </article>

      <article id='Stacks'>
        <Title text='Stacks' />
        <section className='list-stack'>{AllIconsStack('list-stack__icons')}</section>
      </article>

      <article id='about'>
        <Title text='About' />
      </article>

      <article id='contact'>
        <Title text='Contact' />
      </article>
    </main>
  )
}

export default Main
