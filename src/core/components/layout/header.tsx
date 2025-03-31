import { JSX, useState } from 'react'
import { IBars3, IGithub, IIn } from '../ui/icons'
import LinkButton from '../ui/link-button'
import data from '../../services/data.json' assert { type: 'json' }
import NavList from '../ui/nav-list'

const Header = (): JSX.Element => {
  const { title, description } = data.header
  const { name, position, image } = data.staff
  const { social } = data.links

  const [isActive, setIsActive] = useState(false)

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.matches('.nav__routing')) setIsActive(false)
  })

  return (
    <header className='header-container'>
      <nav className='nav'>
        <p className='nav__logo'>BG.</p>
        <NavList className='nav__list' />
        <button className='nav__button' aria-label='menu button' onClick={() => setIsActive(!isActive)}>
          <IBars3 />
        </button>
        <NavList className={isActive ? 'dropdown' : 'dropdown-off'} />
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
