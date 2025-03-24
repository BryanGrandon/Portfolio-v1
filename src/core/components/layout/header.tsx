import { JSX } from 'react'
import { IGithub, IIn } from '../ui/icons'
import LinkButton from '../ui/link-button'
import data from '../../services/data.json' assert { type: 'json' }

const Header = (): JSX.Element => {
  const { image, title, description, position, name } = data.header
  const { social } = data.links

  return (
    <header className='header-container'>
      <nav className='nav'>
        <p className='nav__logo'>BG.</p>
        <section className='nav__list'>
          <a href='#projects' className='nav__link'>
            Project
          </a>
          <a href='#about' className='nav__link'>
            About
          </a>
          <a href='#contact' className='nav__link'>
            Contact
          </a>
        </section>
      </nav>

      <article className='header'>
        <img src={image.src} alt={image.alt} className='header__img' />
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
            <LinkButton href={social.github} ariaLabel='link for linkedin' jsx={<IIn className='icon__link-btn' />} />
          </section>
        </section>
      </article>
    </header>
  )
}

export default Header
