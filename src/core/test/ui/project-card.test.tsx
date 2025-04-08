import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import ProjectCard from '../../components/ui/project-card'
import data from '../../services/data.json' assert { type: 'json' }

describe('ProjectCard', () => {
  afterEach(cleanup)
  const data_1 = data.projects[0]
  const project = (
    <ProjectCard
      key={data_1.id}
      url={data_1.url}
      image={data_1.image}
      title={data_1.title}
      description={data_1.description}
      ariaLabel={data_1.ariaLabel}
      technologies={data_1.technologies}
    />
  )

  it('should render.', (): void => {
    render(project)
  })

  it('should have a title. and description', (): void => {
    render(project)
    screen.getByText(data_1.title)
    screen.getByText(data_1.description)
  })

  it('check if you have an image with src and alt attributes', (): void => {
    render(project)
    screen.getByRole('img', { name: data_1.image.alt })
    expect(screen.getByAltText(data_1.image.alt)).toHaveProperty('src', `http://localhost:3000${data_1.image.src}`)
    expect(screen.getByAltText(data_1.image.alt)).toHaveProperty('alt', data_1.image.alt)
  })

  it('check if the link has href attribute', (): void => {
    render(project)
    screen.getByRole('link', { name: data_1.ariaLabel })
    const link = screen.getByRole('link', { name: data_1.ariaLabel })
    expect(link).toHaveProperty('href', data_1.url)
    expect(link).toHaveProperty('target', '__black')
  })

  it('should check if the technologies are displayed', (): void => {
    render(project)
    const { technologies } = data_1
    if (technologies) {
      technologies.forEach((e) => {
        screen.getByRole('img', { name: e.alt })
        expect(screen.getByAltText(e.alt)).toHaveProperty('src', e.img)
      })
    }
  })
})
