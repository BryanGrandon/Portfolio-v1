import { JSX } from 'react'
import { IGithub, IIn } from '../ui/icons'
import LinkButton from '../ui/link-button'
import data from '../../services/data.json' assert { type: 'json' }

const Header = (): JSX.Element => {
  const { title, description } = data.header
  const { name, position, image } = data.staff
  const { social } = data.links
  return (
    <header className='header-container'>
      <article className='header'>
        <div className='header__img' style={{ backgroundImage: `url(${image.src})` }}></div>
        <section className='header__info'>
          <section className='header__container'>
            <h1 className='header__title'>
              {title} <span className='name'>{name}</span>
            </h1>
            <p>
              I'm <span className='position'>{position}</span>
            </p>
          </section>
          <p>{description}</p>
          <section className='header__social-links'>
            <LinkButton href={social.github} ariaLabel='link for github' jsx={<IGithub className='icon__link-btn' />} />
            <LinkButton href={social.linkedin} ariaLabel='link for linkedin' jsx={<IIn className='icon__link-btn' />} />
          </section>
        </section>
      </article>
    </header>
  )
}

export default Header
