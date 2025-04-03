import { ILink } from './icons'

type Project_Card = {
  url: string
  image: { src: string; alt: string }
  title: string
  description: string
  ariaLabel: string
}
const ProjectCard = ({ image, url, title, description, ariaLabel }: Project_Card) => {
  return (
    <a href={url} target='__black' className='project-card' aria-label={ariaLabel}>
      <img className='project-card__img' src={image.src} alt={image.alt} />
      <section className='project-card__info'>
        <h3 className='project-card__title'>{title}</h3>
        <p style={{ position: 'relative' }}>{description}</p>
        <ILink className='project-card__link' />
      </section>
    </a>
  )
}

export default ProjectCard
