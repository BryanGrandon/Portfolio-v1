import { ILink } from './icons'
import TechnologyImg from './technology-img'

type Project_Card = {
  url: string
  image: { src: string; alt: string }
  title: string
  description: string
  ariaLabel: string
  technologies?: { alt: string; img: string }[]
}
const ProjectCard = ({ image, url, title, description, ariaLabel, technologies }: Project_Card) => {
  console.log(technologies)

  return (
    <a href={url} target='__black' className='project-card' aria-label={ariaLabel}>
      <img className='project-card__img' src={image.src} alt={image.alt} />
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
