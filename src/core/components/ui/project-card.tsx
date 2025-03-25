type Project_Card = {
  url: string
  img: string
  title: string
  description: string
  ariaLabel: string
}

const ProjectCard = ({ url, img, title, description, ariaLabel }: Project_Card) => {
  return (
    <a href={url} target='__black' className='project-card' aria-label={ariaLabel}>
      <img className='project-card__img' src={img} alt='s' />
      <section className='project-card__info'>
        <h3 className='project-card__title'>{title}</h3>
        <p className='project-card__description'>{description}</p>
      </section>
    </a>
  )
}

export default ProjectCard
