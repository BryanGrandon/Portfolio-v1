import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Header from '../../components/layout/header'
import data from '../../services/data.json' assert { type: 'json' }

describe('Header', () => {
  afterEach(cleanup)
  const { title, description } = data.header
  const { image } = data.staff

  it('should render.', (): void => {
    render(<Header />)
  })

  it('should display the title from the data.json.', (): void => {
    render(<Header />)
    screen.getByText(title)
  })

  it('should display the description from the data.json.', (): void => {
    render(<Header />)
    screen.getByText(description)
  })

  it('should display the img from the data.json.', (): void => {
    render(<Header />)
    screen.getByAltText(image.alt)
    expect(screen.getByAltText(image.alt)).toHaveProperty('src', `http://localhost:3000${image.src}`)
  })

  it('should check for social links.', (): void => {
    render(<Header />)
    screen.getByRole('link', { name: 'link for github' })
    screen.getByRole('link', { name: 'link for linkedin' })
  })
})
