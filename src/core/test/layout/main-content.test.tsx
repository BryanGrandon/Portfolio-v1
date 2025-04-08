import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import data from '../../services/data.json' assert { type: 'json' }
import MainContent from '../../components/layout/main-content'

describe('Projects', () => {
  afterEach(cleanup)

  it('should render.', (): void => {
    render(<MainContent />)
  })

  it('must show the titles', (): void => {
    render(<MainContent />)
    screen.getByText('Projects')
    screen.getByText('About')
    screen.getByText('Stack')
    screen.getByText('Contact')
  })

  it('should display the project cards', (): void => {
    render(<MainContent />)
    data.projects.forEach((project) => {
      screen.getByText(project.title)
      screen.getByText(project.description)
      expect(screen.getByAltText(project.image.alt)).toHaveProperty('src', `http://localhost:3000${project.image.src}`)
    })
  })

  it('should display the about section', (): void => {
    render(<MainContent />)
    const { image, name } = data.staff
    expect(screen.getByAltText(image.alt)).toHaveProperty('src', `http://localhost:3000${image.src}`)
    screen.getByText(name)
    screen.getByText(data.about.description)
  })

  it('contact section should display the email', () => {
    render(<MainContent />)
    const { gmail } = data.staff
    screen.getByText(gmail)
  })
})
