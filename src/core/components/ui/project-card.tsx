import { ILink } from './icons'
import TechnologyImg from './technology-img'

type Project_Card = {
  url: string
  title: string
  description: string
  ariaLabel: string
  technologies?: { alt: string; img: string }[]
}
const ProjectCard = ({ url, title, description, ariaLabel, technologies }: Project_Card) => {
  const theClass = title.replace(/\s+/g, '-').toLowerCase()
  return (
    <a href={url} target='__black' className='project-card' aria-label={ariaLabel}>
      <div className={`project-card__img ${theClass} `}></div>
      <section className='project-card__info'>
        <h3 className='project-card__title'>{title}</h3>
        <p style={{ position: 'relative' }}>{description}</p>
        <section className='project-card__technologies'>
          {technologies?.map((e, i) => (
            <TechnologyImg key={i} src={e.img} alt={e.alt} />
          ))}
        </section>
        <ILink className='project-card__link' />
      </section>
    </a>
  )
}

export default ProjectCard
