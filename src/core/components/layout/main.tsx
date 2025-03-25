import data from '../../services/data.json' assert { type: 'json' }
import ProjectCard from '../ui/project-card'

const Main = () => {
  return (
    <main className='main'>
      <article id='projects'>
        <h2>Projects</h2>
        <article className='projects'>
          {data.projects.map((e) => (
            <ProjectCard key={e.id} url={e.url} img={e.img} title={e.title} description={e.description} ariaLabel={e.ariaLabel} />
          ))}
        </article>
      </article>

      <article id='about'>
        <h2>About</h2>
      </article>

      <article id='contact'>
        <h2>Contact</h2>
      </article>
    </main>
  )
}

export default Main
