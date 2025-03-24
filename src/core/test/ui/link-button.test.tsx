import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import LinkButton from '../../components/ui/link-button'
import { IGithub } from '../../components/ui/icons'

describe('Button', () => {
  afterEach(cleanup)

  it('should render.', (): void => {
    render(<LinkButton href='#' ariaLabel='test' />)
  })

  it('should display the text entered.', (): void => {
    render(<LinkButton href='#' ariaLabel='test' text='proof text' />)
    screen.getByText('proof text')
  })

  it('should display the icons entered.', (): void => {
    render(<LinkButton href='#' ariaLabel='icon' jsx={<IGithub />} />)
    screen.getByRole('link', { name: 'icon' })
  })

  it('check if the link has the href attribute with the address that was passed to it.', (): void => {
    const github = 'https://github.com/BryanGrandon'
    render(<LinkButton href={github} ariaLabel='test' text='proof text' />)
    expect(screen.getByRole('link', { name: 'test' })).toHaveProperty('href', github)
    fireEvent.click(screen.getByText('proof text'))
  })
})
