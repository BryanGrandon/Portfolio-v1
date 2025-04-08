import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import TechnologyImg from '../../components/ui/technology-img'

describe('TechnologyImg', () => {
  afterEach(cleanup)

  it('should render.', (): void => {
    render(<TechnologyImg src='' alt='' />)
  })

  it('should render the entered (alt).', (): void => {
    render(<TechnologyImg src='' alt='home.png' />)
    screen.getByAltText('home.png')
  })

  it('check if the className has the default class and the new added class.', (): void => {
    render(<TechnologyImg src='' alt='home.png' className='other-class' />)
    const img = screen.getByAltText('home.png')
    expect(img).toHaveProperty('className', 'technology other-class')
  })
})
