import LinkButton from './link-button'

type Nav_list = {
  className: string
}

const NavList = ({ className }: Nav_list) => {
  return (
    <section className={className}>
      <LinkButton href='#projects' ariaLabel='routing to projects' text='Projects' className='nav__routing' />
      <LinkButton href='#stacks' ariaLabel='routing to stacks' text='Stacks' className='nav__routing' />
      <LinkButton href='#about' ariaLabel='routing to about' text='About' className='nav__routing' />
      <LinkButton href='#contact' ariaLabel='routing to contact' text='Contact' className='nav__routing' />
    </section>
  )
}

export default NavList
